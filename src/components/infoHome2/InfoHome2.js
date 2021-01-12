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
					<h1>Lorem ipsum dolor sit amet.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis impedit earum? Repellendus accusantium quibusdam corrupti debitis eos officia quam minima. Velit possimus, repudiandae aut veniam maiores optio iusto vel sunt provident deserunt aperiam quis ad fuga cum magni est.</p>
				</div>
			</section>
		</>
	)
}
export default function LazyInfoHome2() {
  const fromRef = useRef()
	const isIntersected = useLazy({distance: '0px', fromRef})
	// console.log(isIntersected)

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