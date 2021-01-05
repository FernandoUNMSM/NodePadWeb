import React, { useEffect } from 'react'
import './dates.css'
import { faGripHorizontal, faTimesCircle, faFileCode, faTrash, faFileDownload, faFileUpload, prefix } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import sendFile from './../../services/sendFile'


function Dates({ dates, setDates, lenguaje }) {
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
	} 

	const mostrarDatos = () => {
		setDates(!dates)
	}

	const enviarFile = () => {
		let jsonFile = {
			nombre: 'nyan-nyan-chan-chan',
			cuerpo: 'gawr gura',
			iduser: 191,
			tipo: 'css'
		}
		sendFile({jsonFile})
	}

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
						<div className="datesLeftMed">
							<div className="datesLeftMed1">
								<h2 className="datesH2">Nombre del documento</h2>
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faFileCode} className="datesIconM" />
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faTrash} className="datesIconM" />
							</div>
						</div>
						<div className="datesLeftMed">
							<div className="datesLeftMed1">
								<h2 className="datesH2">Nombre del documento</h2>
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faFileCode} className="datesIconM" />
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faTrash} className="datesIconM" />
							</div>
						</div>
						<div className="datesLeftMed">
							<div className="datesLeftMed1">
								<h2 className="datesH2">Nombre del documento</h2>
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faFileCode} className="datesIconM" />
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faTrash} className="datesIconM" />
							</div>
						</div>
						<div className="datesLeftMed">
							<div className="datesLeftMed1">
								<h2 className="datesH2">Nombre del documento</h2>
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faFileCode} className="datesIconM" />
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faTrash} className="datesIconM" />
							</div>
						</div>
						<div className="datesLeftMed">
							<div className="datesLeftMed1">
								<h2 className="datesH2">Nombre del documento</h2>
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faFileCode} className="datesIconM" />
							</div>
							<div className="datesLeftMed2">
								<FontAwesomeIcon icon={faTrash} className="datesIconM" />
							</div>
						</div>
					</div>
					<div className="datesRight">
						<div className="datesRightS">
							<FontAwesomeIcon icon={iconi} className="datesIconR" />
						</div>
						<div className="datesRightI">
							<h3 className="datesH3">Documento Actual</h3>
							<p className="datesP">
								Nombre:</p>
							<input type="text" id="namedoc" className="datesField"></input>
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