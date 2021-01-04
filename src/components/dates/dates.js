import React, { useEffect, useState } from 'react'
import './dates.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import listFiles from './../../services/listFiles'
import Reciente from './../reciente/reciente'
import Guardar from './../guardar/guardar'

function Dates({ dates, setDates, lenguaje, bodyfile }) {
	let leng = lenguaje.toLowerCase()
	let iduser = JSON.parse(localStorage.getItem("usuarioActual")).id;

	const [loader, setLoader] = useState(true)
	const [list, setList] = useState([])

	const [accion, setAccion] = useState("Reciente")

	const [idfileHtml, setIdfileHtml] = useState(null)
	const [idfileCss, setIdfileCss] = useState(null)
	const [idfileJs, setIdfileJs] = useState(null)

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

	const changeAccion = (evt) => {
		const tabs = document.querySelectorAll('.tabs p');
		tabs.forEach(tab => tab.classList.remove('focus'))
		evt.target.classList.add('focus')
		let accion = evt.target.textContent;
		setAccion(accion);
	}

	useEffect(() => {
		setLoader(true)
		if (dates) {
			listFiles({ leng: leng, id: iduser })
				.then(res => {
					setLoader(false)
					setList(res.data)
				})
		} else {
			setList([])
		}
	}, [dates]) //eslint-disable-line

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
											<Reciente
												mostrarDatos={mostrarDatos}
												leng={leng}
												iconi={iconi}
												list={list}
												loader={loader}
												setIdfileHtml={setIdfileHtml}
												setIdfileCss={setIdfileCss}
												setIdfileJs={setIdfileJs}
											/>
										</>
										: null
								}
								{
									(accion === "Guardar")
										?
										<Guardar
											mostrarDatos={mostrarDatos}
											idfileJs={idfileJs}
											idfileCss={idfileCss}
											idfileHtml={idfileHtml}
											leng={leng}
											bodyfile={bodyfile}
										/>
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