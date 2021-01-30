/* eslint-disable jsx-a11y/anchor-is-valid */
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
				<ul className="menu menu-entrada">
					<li className="menu_entra">
						<a  href="#" className="menu_entralink">Inicio</a>
					</li>
					<li className="menu_entra">
						<a  href="#" className="menu_entralink">Nosotros</a>
						<ul className="menu">
							<li className="menu_entra">
								<a target="_blank" href="http://localhost:3000/mision" className="menu_entralink" rel="noreferrer">Misión</a>
							</li>
							<li className="menu_entra">
								<a target="_blank" href="http://localhost:3000/vision" className="menu_entralink" rel="noreferrer">Visión</a>
							</li>
							<li className="menu_entra">
								<a target="_blank" href="http://localhost:3000/proposito" className="menu_entralink" rel="noreferrer">Proposito</a>
							</li>
						</ul>
					</li>
					<li className="menu_entra">
						<a href="#" className="menu_entralink">HTML</a>
					</li>
					<li className="menu_entra">
						<a href="#" className="menu_entralink">CSS</a>
					</li>
					<li className="menu_entra">
						<a href="#" className="menu_entralink">JAVASCRIPT</a>
					</li>
					<li className="menu_entra">
						<a href="#" className="menu_entralink">otros</a>
						<ul className="menu">
							<li className="menu_entra">
								<a href="#" className="menu_entralink">Python</a>
							</li>
							<li className="menu_entra">
								<a href="#" className="menuentralink">C#</a>
							</li>
							<li className="menuentra">
								<a href="#" className="menu_entralink">C++</a>
							</li>
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