import React from 'react'
import './MenuHeader.css'
import {Link} from 'wouter'
import logo from './../../assets/img/logo-png.png'
function MenuHeader() {

	return (
		<>
			<div className="menu-container">
				<div className="logo">
					<img src={logo} alt="logo" width='50px'/>
					<h1>NodePad Web</h1>
				</div>
				<ul className="menu">
					<li className="listItem">
						<Link to={`/register`}>Registrate</Link>
					</li>
					<li className="listItem">
						<Link to={`/login`}>Iniciar Sesion</Link>
					</li>
				</ul>
			</div>
		</>
	)
}
export default MenuHeader