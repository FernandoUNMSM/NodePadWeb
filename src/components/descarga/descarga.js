import React from 'react';
import './descarga.css'
import SimpleSwitch from './../simpleSwitch/simpleswitch'

function Descarga() {

	return (
		<>
			<div className="formatoContainer">
				<div className="containerRes">
					<div className="formatoTitulo">
						<h1>Preferencias de Descarga</h1>
					</div>
					<div className="formatoItem descargaItem">
						<div className="formatoInfo">
							<p>Activar opcion de descarga unitaria</p>
							<p className="formatoP">Tamaño de fuente del editor</p>
						</div>
						<SimpleSwitch number={1} />
					</div>
					<div className="formatoItem descargaItem">
						<div className="formatoInfo">
							<p>Activar opcion de descarga completa</p>
							<p className="formatoP">Tamaño de fuente del editor</p>
						</div>
						<SimpleSwitch number={2} />
					</div>
				</div>
			</div>
		</>
	)
}
export default Descarga