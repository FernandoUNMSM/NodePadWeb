import React, { useEffect, useState } from 'react'

import './InfoHome.css'

function InfoHome() {

	return (
		<>
			<section className="section2">
				<h1>seccion 2</h1>
				<img src="./../assets/img/efecto1.png" alt=""/>
			</section>
			<section className="section1">
				<div className="info infos1">
					<h1>Lorem ipsum dolor sit amet.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis impedit earum? Repellendus accusantium quibusdam corrupti debitis eos officia quam minima. Velit possimus, repudiandae aut veniam maiores optio iusto vel sunt provident deserunt aperiam quis ad fuga cum magni est.</p>
				</div>
			</section>
		</>
	)
}
export default function LazyInfoHome() {
	const [show, setShow] = useState(false)

	useEffect(()=>{
		const onChange = (entries)=> {
			const el = entries[0]
			if(el.isIntersecting){
				setShow(true)
			}
		}

		const observer = new IntersectionObserver(onChange, {
			rootMargin: '10px'
		})
		observer.observe(document.getElementById('lazyInfo'))
	})

	return(
		<div id="lazyInfo">
			{
				show
				? <InfoHome/>
				: null
			}
		</div>
	)
}