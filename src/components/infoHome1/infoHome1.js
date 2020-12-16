import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import useLazy from './../../hooks/useLazy'
import './infoHome1.css'

function InfoHome1() {
	return (
		<>
			<section className="section1">
				<div className="section1InfoContainer">
					<div className="infoContent">
						<h1>Lorem ipsum dolor sit amet.</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, nam.</p>
					</div>
					<div className="iconsContainer">
						<div className="icons">
						<FontAwesomeIcon icon={faCode} />
						<FontAwesomeIcon icon={faCss3Alt} />
						<FontAwesomeIcon icon={faJs}/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default function LazyInfoHome1() {
  const fromRef = useRef()
	const isIntersected = useLazy({distance: '0px', fromRef})
	// console.log(isIntersected)

	return(
		<div ref={fromRef} id="lazyInfo">
			{
				isIntersected
				? <InfoHome1/>
				: null
			}
		</div>
	)
}