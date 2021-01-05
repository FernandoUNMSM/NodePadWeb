import React from 'react'
import './proposito.css'
function Proposito() {
	return (
		<>
			<header>
				<div className="Tprincipal">
					<h1>Editor de  Codigo Notepad</h1>

				</div>
			</header>
			<nav>
				<ul className="menuentrada">
					{/* eslint-disable */}
					<li><a href="#">Inicio</a></li>
					<li><a href="#">Nosotros</a>
						<ul>
							<li><a target="_blank" href="http://localhost:3000/mision">Misión</a></li>
							<li><a target="_blank" href="http://localhost:3000/vision">Visión</a></li>
							<li><a target="_blank" href="http://localhost:3000/proposito">Proposito</a></li>
						</ul>
					</li>
					<li><a href="#">HTML</a></li>
					<li><a href="#">CSS</a></li>
					<li><a href="#">JAVASCRIPT</a></li>
					<li><a href="#">otros</a>
						<ul>
							<li><a href="#">Python</a></li>
							<li><a href="#">C#</a></li>
							<li><a href="#">C++</a></li>
						</ul>
					</li>
				</ul>
			</nav>

			<div>
				<h2 className="h2entrada">Proposito</h2>
				<p>
					La finalidad de este proyecto es obtener experiencia con respecto al desarrollo web y simular cómo se desenvuelven las metodologías ágiles dentro de su estructura, desarrollando los pasos específicos del plan SCRUM y logrando un resultado aceptable.
        </p>
			</div>
		</>
	)
}
export default Proposito