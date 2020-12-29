import React, { useEffect, useRef, useState } from 'react'
import './dates.css'
import { faTimesCircle, faFileCode, faTrash } from '@fortawesome/free-solid-svg-icons'
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

	const enviarFile = () => {
		let nombre = nameDoc.current.value;
		let jsonFile = {
			nombre: nombre,
			cuerpo: bodyfile,
			iduser: iduser,
			tipo: leng
		}
		sendFile({ jsonFile })
	}
	useEffect(() => {
		setLoader(true)
		if(dates){
			listFiles({ leng: leng, id: iduser })
			// listFiles({ leng: leng})
				.then(res => {
					console.log(res)
					setLoader(false)
					setList(res.data)
				})
		}else{
			setList([])
		}
	}, [dates])

	return (
		<>
			{(dates)
				?
				<div className="datesContainer">
					<div className="datesLeft">
						<div className="datesLeftSup">
							<div className="datesLeftSup1">
								<FontAwesomeIcon icon={iconi} className="datesIconS" />
								<h1 className="datesH1">Documentos {lenguaje}</h1>
							</div>
							<div className="datesLeftSup2">
								<FontAwesomeIcon icon={faTimesCircle} className="datesIconS2" onClick={mostrarDatos} />
							</div>
						</div>
						{
							(loader)
								?
								<div className="spinnerContainer">
									<div className="spinner"></div>
								</div>
								:
								list.map((value, index) => {
									return (
										<div className="datesLeftMed" key={index}>
											<div className="datesLeftMed1">
												<h2 className="datesH2">{value.nombre}</h2>
											</div>
											<div className="datesLeftMed2">
												<FontAwesomeIcon icon={faFileCode} className="datesIconM" />
											</div>
											<div className="datesLeftMed2">
												<FontAwesomeIcon icon={faTrash} className="datesIconM" />
											</div>
										</div>
									)
								})
						}
					</div>
					<div className="datesRight">
						<div className="datesRightS">
							<FontAwesomeIcon icon={iconi} className="datesIconR" />
						</div>
						<div className="datesRightI">
							<h3 className="datesH3">Documento Actual</h3>
							<p className="datesP">
								Nombre:</p>
							<input type="text" id="namedoc" className="datesField" ref={nameDoc}></input>
							<p className="datesP">
								Tamaño: 0 KB
              </p>
							<button className="datesButton" onClick={enviarFile}>
								Guardar
              </button>
						</div>
					</div>
				</div>
				: null
			}

		</>
	)
}
export default Dates