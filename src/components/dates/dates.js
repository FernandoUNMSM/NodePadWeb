import React, { useEffect, useRef, useState, useContext } from 'react'
import './dates.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faFileCode, faTrash, faGripLines, faTh } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import sendFile from './../../services/sendFile'
import listFiles from './../../services/listFiles'
import FileContext from './../../context/fileContext'

function Dates({ dates, setDates, lenguaje, bodyfile }) {
	let leng = lenguaje.toLowerCase()
	let iduser = JSON.parse(localStorage.getItem("usuarioActual")).id;

	const { fileContent, setFileContent } = useContext(FileContext)

	const [loader, setLoader] = useState(true)
	const [list, setList] = useState([])

	const [accion, setAccion] = useState("Reciente")

	var nameDoc = useRef(null)

	var iconi
	switch (lenguaje) {
		case "HTML":
			iconi = faHtml5
			break;
		case "CSS":
			iconi = faCss3Alt
			break;
		case "JS":
			iconi = faNodeJs
			break;
		default: break;
	}

	const mostrarDatos = () => {
		setDates(!dates)
		setAccion("Reciente")
	}

	const enviarFile = (evt) => {
		evt.preventDefault()
		let nombre = nameDoc.current.value;
		let jsonFile = {
			nombre: nombre,
			cuerpo: bodyfile,
			iduser: iduser,
			tipo: leng
		}
		sendFile({ jsonFile })
		mostrarDatos();
	}

	const changeAccion = (evt) => {
		const tabs = document.querySelectorAll('.tabs p');
		tabs.forEach(tab => tab.classList.remove('focus'))
		evt.target.classList.add('focus')
		let accion = evt.target.textContent;
		setAccion(accion);
	}

	const changeFileState = (evt) => {
		const idfile = evt.target.parentNode.id;
		mostrarDatos();
		setFileContent({file: list[idfile], len: leng})
	}

	useEffect(() => {
		if (dates) {
			console.log(fileContent)
		}
		setLoader(true)
		if (dates) {
			listFiles({ leng: leng, id: iduser })
				.then(res => {
					console.log(res)
					setLoader(false)
					setList(res.data)
				})
		} else {
			setList([])
		}
	}, [dates]) //eslint-disable-line

	useEffect(() => {

	},[accion])

	return (
		<>
			{(dates)
				?
				<div className="grayContainer">
					<div className="datesContainer">
						<div className="datesLeft">
							<div className="datesLeftSup">
								<div className="datesLeftSup1">
									<FontAwesomeIcon icon={iconi} className="datesIconS" />
									<h1 className="datesH1">Documentos {lenguaje}</h1>
								</div>
								<div className="datesLeftSup2">
									<FontAwesomeIcon icon={faTimes} className="datesIconS2" onClick={mostrarDatos} />
								</div>
							</div>
							<div className="datestabs">
								<div className="tabs reciente" onClick={changeAccion}><p className="focus">Reciente</p></div>
								<div className="tabs guardar" onClick={changeAccion}><p>Guardar</p></div>
								<div className="tabs cargar" onClick={changeAccion}><p>Cargar</p></div>
							</div>
							<div className="tabsContainer">
								{
									(accion === "Reciente")
										?
										<>
											<div className="recienteSup">
												<p>Reciente</p>
												<div className="recienteIcons">
													<FontAwesomeIcon icon={faGripLines} className="recienteLayout" />
													<FontAwesomeIcon icon={faTh} className="recienteLayout" />
												</div>
											</div>
											{(loader)
												?
												<div className="spinnerContainer">
													<div className="spinner"></div>
												</div>
												:
												<div className="filesContainer">
													{list.map((value, index) => {
														return (
															<div className="datesLeftMed" key={index}>
																<div className="datesLeftMed1" id={index} >
																	<FontAwesomeIcon icon={iconi} className="datesIconS" />
																	<h2 className="datesH2" id={index} onClick={changeFileState} >{value.nombre}</h2>
																</div>
																<div className="datesIcons">
																	<div className="datesLeftMed2" id={index}>
																		<FontAwesomeIcon icon={faFileCode} className="datesIconM" onClick={changeFileState} id={index} />
																	</div>
																	<div className="datesLeftMed2">
																		<FontAwesomeIcon icon={faTrash} className="datesIconM" />
																	</div>
																</div>
															</div>
														)
													})}
												</div>
											}
										</>
										: null
								}
								{
									(accion === "Guardar")
										? <>
											<div className="guardarContainer">
												<div className="datesPreview">
													<p>{fileContent.file.cuerpo}</p>
												</div>
												<div className="datesRight">
													<div className="datesSave">
														<p className="datesP">Nombre:</p>
														<div className="col">
															<div className="inputBox">
																<form action="" id="file" onSubmit={enviarFile}>
																	<input type="text" name="namedoc" required="required" autoComplete="off" ref={nameDoc} pattern="[A-Za-z0-9_-]{1,15}"/>
																	<span className="line"></span>
																</form>
															</div>
														</div>
													</div>
													<button className="datesButton" form="file">
														Guardar
              						</button>
												</div>
											</div>
										</>
										: null
								}
								{
									(accion === "Cargar")
										?
										<h1>Cargar</h1>
										: null
								}
							</div>
						</div>
					</div>
				</div>
				: null
			}

		</>
	)
}
export default Dates