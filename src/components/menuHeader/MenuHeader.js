import React, {useEffect, useState} from 'react'
import './MenuHeader.css'
import { Link } from 'wouter'
import logo from './../../assets/img/logo-png.png'

function MenuHeader() {
	const usuarioA = localStorage.getItem("usuarioActual")
	const [sesion, setSesion] = useState(false)

	useEffect(() => {
		if(usuarioA !== "{}") {
			setSesion(true)
		}else{
			setSesion(false)
		}
	},[]) //eslint-disable-line

  const cerrarSesion = () =>{
    localStorage.setItem("usuarioActual", "{}")
    setSesion(false)
  }
	return (
		<>
			<div className="menu-container">
				<div className="logo">
					<img src={logo} alt="logo" width='50px'/>
					<h1>NodePad Web</h1>
				</div>
				{
					(sesion)
					?
					<ul className="menuH">
						<li className="listItem">
							<Link to={`/`} onClick={cerrarSesion}>Cerrar sesion</Link>
						</li>
						<li className="listItem">
							<Link to={`/editor`}>Ingresa al editor</Link>
						</li>
					</ul>
					:
					<ul className="menuH">
						<li className="listItem">
							<Link to={`/register`}>Registrate</Link>
						</li>
						<li className="listItem">
							<Link to={`/login`}>Iniciar Sesion</Link>
						</li>
					</ul>
				}
			</div>
		</>
	)
}
export default MenuHeader