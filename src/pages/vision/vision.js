import React from 'react'
import './vision.css'
function Vision() {
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
								<a target="_blank" href="http://localhost:3000/mision" className="menu_entralink">Misión</a>
							</li>
							<li className="menu_entra">
								<a target="_blank" href="http://localhost:3000/vision" className="menu_entralink">Visión</a>
							</li>
							<li className="menu_entra">
								<a target="_blank" href="http://localhost:3000/proposito" className="menu_entralink">Proposito</a>
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
                <h2 className="h2entrada">Vision</h2>
                <p>
                Llegar a desarrollar un entorno online a gustos de nuestros usuarios para que aprovechen al máximo las herramientas de desarrollo web que tenemos y lograr incentivar su uso para más personas.
                </p>
            </div>


    </>
	)
}
export default Vision