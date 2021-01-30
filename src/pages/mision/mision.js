/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './mision.css'
function Mision() {
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
                <h2 className="h2entrada">Mision</h2>
                <p>
                Permitir a los usuarios la simulación para el desarrollo de páginas web de manera online sin la necesidad de programas externos, por medio de una interfaz sencilla e intuitiva que facilite su uso.
                </p>
            </div>


    </>
	)
}
export default Mision