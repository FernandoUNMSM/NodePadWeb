import React, {useRef} from 'react'
import useLazy from './../../hooks/useLazy'

import './InfoHome2.css'

function InfoHome2() {

	return (
		<>
			<section className="section2">
				<div className="section2Box">
				</div>
				<div className="info infos2">
					<h1>Estilos preferenciales.</h1>
					<p>Puedes editar libremente las lineas de codigo segun tu preferencia, tales como seleccionar un color, un tamaño definido o un estilo. Esto y muchas cosas mas con nuestro increible editor de codigo.</p>
				</div>
			</section>
		</>
	)
}
export default function LazyInfoHome2() {
  const fromRef = useRef()
	const isIntersected = useLazy({distance: '0px', fromRef})
	// console.log(isIntersected)
	// consoloe.log(isIntersected)2

	return(
		<div ref={fromRef} id="lazyInfo2">
			{
				isIntersected
				? <InfoHome2/>
				: null
			}
		</div>
	)
}