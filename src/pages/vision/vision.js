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
				<ul className="menu">
					<li><a href="#">Inicio</a></li>
					<li><a href="#">Nosotros</a>
						<ul>
							<li><a href="#">Misión</a></li>
							<li><a href="#">Visión</a></li>
							<li><a href="#">Valores</a></li>
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
                <h2 className="h2vision">Vision</h2>
                <p>
                Llegar a desarrollar un entorno online a gustos de nuestros usuarios para que aprovechen al máximo las herramientas de desarrollo web que tenemos y lograr incentivar su uso para más personas.
                </p>
            </div>


    </>
	)
}
export default Vision