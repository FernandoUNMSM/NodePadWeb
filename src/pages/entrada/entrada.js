import React from 'react'
import './entrada.css'
function Entrada() {
	return (
		<>
			<header>
				<div className="Tprincipal">
					<h1>Editor de  Codigo Notepad</h1>

				</div>
			</header>		
		<nav>
				<ul className="menu">
					<li><a target="_blank" href="#">Inicio</a></li>
					<li><a target="_blank" href="#">Nosotros</a>
						<ul>
							<li><a target="_blank" href="#">Misión</a></li>
							<li><a target="_blank" href="#">Visión</a></li>
							<li><a target="_blank" href="#">Valores</a></li>
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

			<br></br>
			<div>
				<div>
					<article >
						<div>
							<h2>HTML</h2>
							<img src="https://www.flaticon.es/svg/static/icons/svg/1216/1216733.svg" alt="Logo de HTML" className="html"></img>

						</div>
						<div className="htmlt">
							<p>
								HTML no es un lenguaje de programación, esto debes tenerlo muy en claro desde el principio, HTML es un lenguaje de marcado de hipertexto o “HyperText Markup Language” por el desarrollo de sus iniciales en inglés, básicamente este lenguaje se escribe en su totalidad con elementos, estos elementos están constituidos por etiquetas, contenido y atributos, que explicaremos de una manera más detallada en algunas líneas más abajo.</p>
							<p>
								HTML es un lenguaje que interpreta el navegador web para mostrar los sitios o aplicaciones web tal y como estamos acostumbrados. El lenguaje HTML basa su filosofía de desarrollo en la diferenciación. Para añadir un elemento externo a la página (imagen, vídeo, script, entre otros.), este no se incrusta directamente en el código de la página, sino que se hace una referencia a la ubicación de dicho elemento mediante texto. De este modo, la página web contiene solamente texto mientras que recae en el navegador web (interpretador del código) la tarea de unir todos los elementos y visualizar la página final. Al ser un estándar, HTML busca ser un lenguaje que permita que cualquier página web escrita en una determinada versión, pueda ser interpretada de la misma forma (estándar) por cualquier navegador web actualizado.</p>
						</div>
					</article>
				</div>
				<article>
					<div>
						<h2>CSS</h2>
						<img src="https://desarrolloweb.com/storage/tag_images/actual/sT1RLpDHzInATuKnDUkwXhKoaIOrtS97gBtgiQ6M.png" alt="Logo de CSS" className="css"></img>
					</div>	
					<div className="csst">
							<p>
								CSS (en inglés Cascading Style Sheets) es lo que se denomina lenguaje
								de hojas de estilo en cascada y se usa para estilizar elementos
								escritos en un lenguaje de marcado como HTML. CSS separa el contenido
                				de la representación visual del sitio.
							</p>
							<p>
								Se le denomina estilos en cascada porque se aplican de arriba a
								abajo (siguiendo un patrón denominado herencia que trataremos más
								adelante) y en el caso de existir ambigüedad, se siguen una serie de
                				normas para resolverla.
							</p>
						</div>

					
				</article>
				<article>
					<div>
						<h2>JAVASCRIPT</h2>
						<img src="https://i0.wp.com/www.drouiz.com/wp-content/uploads/2016/03/learn-javascript.png?fit=344%2C390&ssl=1" alt="Logo de JAVA" className="java"></img>	
					</div>
					<div className="JST">
						<p>
							JavaScript, es uno de los más potentes e importantes lenguajes de programación en la actualidad, por tres enfoques claros: es útil, práctico y está disponible en cualquier navegador web.
                			JavaScript es creado por Brendan Eich y vio la luz en el año 1995 con el nombre de LiveScript, que luego fue nombrado JavaScript, nace como un lenguaje sencillo destinado a añadir algunas características interactivas a las páginas web. Sin embargo, hoy en día ha crecido de manera acelerada y es el lenguaje de programación que se utiliza en casi todos los sitios web en el mundo.
						</p>
						<p>
							El poder de JavaScript está disponible principalmente en lado frontend, agregando mayor interactividad a la web, también puedes usar las librerías y framework como: jquery, angular, backbone, react y demás, escritas sobre JavaScript, y que te ayudan a crear una mejor experiencia de usuario en nuestros sitios web. De igual manera JavaScript se puede utilizar en los servidores web. Node.JS es tu mejor opción para usar este lenguaje del lado del servidor.
						</p>	
					</div>
					
				</article>

			</div>
			<p>Editor de codigo &mdash; Todos los derechos reservados &copy; </p>

		</>
	)
}
export default Entrada
