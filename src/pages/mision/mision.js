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
				<ul className="menuentrada">
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
                <h2 className="h2entrada">Mision</h2>
                <p>
                Permitir a los usuarios la simulación para el desarrollo de páginas web de manera online sin la necesidad de programas externos, por medio de una interfaz sencilla e intuitiva que facilite su uso.
                </p>
            </div>


    </>
	)
}
export default Mision