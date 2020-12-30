import React, { useEffect, useRef, useState } from 'react'
import './dates.css'
import { faTimes, faFileCode, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import sendFile from './../../services/sendFile'
import useGetListFiles from './../../hooks/useGetListFiles'
import listFiles from './../../services/listFiles'
import Loader from './../../components/loader/loader'

function Dates({ dates, setDates, lenguaje, bodyfile }) {
	let leng = lenguaje.toLowerCase()
	let iduser = JSON.parse(localStorage.getItem("usuarioActual")).id;

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
		// console.log(jsonFile)
		sendFile({ jsonFile })
	}

	const changeAccion = (evt) => {
		let accion = evt.target.textContent;
		setAccion(accion);
	}

	useEffect(() => {
		setLoader(true)
		if (dates) {
			listFiles({ leng: leng, id: iduser })
				// listFiles({ leng: leng})
				.then(res => {
					console.log(res)
					setLoader(false)
					setList(res.data)
				})
		} else {
			setList([])
		}
	}, [dates])

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
								<div className="reciente" onClick={changeAccion}><p>Reciente</p></div>
								<div className="guardar" onClick={changeAccion}><p>Guardar</p></div>
								<div className="cargar" onClick={changeAccion}><p>Cargar</p></div>
							</div>
							<div className="tabsContainer">
								{
									(accion === "Reciente")
										?
										<>
											<div className="recienteSup">
												<p>Reciente</p>
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
																<div className="datesLeftMed1">
																	<FontAwesomeIcon icon={iconi} className="datesIconS" />
																	<h2 className="datesH2">{value.nombre}</h2>
																</div>
																<div className="datesIcons">
																	<div className="datesLeftMed2">
																		<FontAwesomeIcon icon={faFileCode} className="datesIconM" />
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
													<p>preview</p>
												</div>
												<div className="datesRight">
													<div className="datesSave">
														<p className="datesP">Nombre:</p>
														<div className="col">
															<div className="inputBox">
																<form action="" id="file" onSubmit={enviarFile}>
																	<input type="text" name="namedoc" required="required" autoComplete="off" ref={nameDoc} />
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