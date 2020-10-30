import { faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
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
	const [show, setShow] = useState(false)

	useEffect(()=>{
		const onChange = (entries)=> {
			const el = entries[0]
			if(el.isIntersecting){
				setShow(true)
			}
		}

		const observer = new IntersectionObserver(onChange, {
			rootMargin: '0px'
		})
		observer.observe(document.getElementById('lazyInfo1'))
	})

	return(
		<div id="lazyInfo1">
			{
				show
				? <InfoHome1/>
				: null
			}
		</div>
	)
}