import React, {useRef} from 'react'
import useLazy from './../../hooks/useLazy'

import './InfoHome3.css'

function InfoHome3() {

	return (
		<>
			<section className="section2">
				<div className="section2Box">
				</div>
				<div className="info infos2">
					<h1>Contactanos.</h1>
					<p>Desarrolla con nosotros paginas web empresariales.</p>
				</div>
			</section>
		</>
	)
}
export default function LazyInfoHome3() {
  const fromRef = useRef()
	const isIntersected = useLazy({distance: '0px', fromRef})
	// console.log(isIntersected)
	// consoloe.log(isIntersected)2

	return(
		<div ref={fromRef} id="lazyInfo3">
			{
				isIntersected
				? <InfoHome3/>
				: null
			}
		</div>
	)
}