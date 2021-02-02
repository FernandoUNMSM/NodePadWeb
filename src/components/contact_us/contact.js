import React, {useRef} from 'react'
import useLazy from './../../hooks/useLazy'

import './contact.css'

function Contact_us() {

	return (
		<>
			<section className="section2">
				<div className="section2Box">
				</div>
				<div className="info infos2">
					<h1>Contactanos.</h1>
					<p>Trabaja con nosotros en proyectos de desarrollo empresariales</p>
				</div>
			</section>
		</>
	)
}
export default function LazyContact_us() {
  const fromRef = useRef()
	const isIntersected = useLazy({distance: '0px', fromRef})
	// console.log(isIntersected)
	// consoloe.log(isIntersected)2

	return(
		<div ref={fromRef} id="lazyInfo2">
			{
				isIntersected
				? <Contact_us/>
				: null
			}
		</div>
	)
}