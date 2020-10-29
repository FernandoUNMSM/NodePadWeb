import React from 'react'
import './MenuHeader.css'

function MenuHeader() {

	return (
		<>
			<div className="menu-container">
				<div className="logo">
					<h1>NodePad Web</h1>
				</div>
				<ul className="menu">
					<li className="listItem">
						<a href="#d">Registrate</a>
					</li>
					<li className="listItem">
						<a href="#d">Iniciar Sesion</a>
					</li>
				</ul>
			</div>
		</>
	)
}
export default MenuHeader