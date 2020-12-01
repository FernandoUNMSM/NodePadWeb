import React from 'react'
import './entrada.css' 
function Entrada() {
	return (
		<>
			<div className="contenedor">
				<header role="banner">

					<nav className="menu" role="navigation">
						<ul>
							<li><a href="#">Sobre Nosotros</a></li>
							<li><a href="#">Cursos</a>
								<ul>
									<li><a href="#">PHP</a></li>
								</ul>
							</li>
							<li><a href="#">Testimoniales</a></li>
							<li><a href="#">Ir a Google</a></li>
						</ul>
					</nav>
				</header>

				<main className="contenido" role="main">
					<section>
						<h2>Nuestros Cursos</h2>
						<div>
							<h3>HTML5</h3>
							<img src="https://desarrolloweb.com/storage/manual_images/cPp3gH7yKOtpZL1rVbHmaqp7RotYShReX4FzLeoN.png" alt="curso html5" width="200" />
						</div>
						<div>
							<h3>CSS3</h3>
							<img src="img/css3.png" alt="curso css3" width="200" />
						</div>
						<div>
							<h3>JavasScript</h3>
							<img src="img/js.jpg" alt="curso javascript" width="200" />
						</div>
					</section>
				</main>

				<aside role="complementary">
					<h2>Próximos Cursos</h2>
					<div>
						<h3>PHP</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div>
						<h3>MySQL</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</aside>
			</div>

			<footer role="contentinfo">
				<div className="nosotros">
					<h3>Sobre nuestra escuela</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>

				<div className="menu">
					<nav>
						menu aqui
              </nav>
				</div>
				<p>Cursos diseño web &mdash; Todos los derechos reservados &copy; </p>
			</footer>
		</>
	)
}
export default Entrada
