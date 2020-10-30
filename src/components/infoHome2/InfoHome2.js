import React, { useEffect, useState } from 'react'

import './InfoHome2.css'

function InfoHome2() {

	return (
		<>
			<section className="section2">
				<div className="info infos2">
					<h1>Lorem ipsum dolor sit amet.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis impedit earum? Repellendus accusantium quibusdam corrupti debitis eos officia quam minima. Velit possimus, repudiandae aut veniam maiores optio iusto vel sunt provident deserunt aperiam quis ad fuga cum magni est.</p>
				</div>
			</section>
		</>
	)
}
export default function LazyInfoHome2() {
	const [show, setShow] = useState(false)

	useEffect(()=>{
		const onChange = (entries)=> {
			const el = entries[0]
			if(el.isIntersecting){
				setShow(true)
			}
		}

		const observer2 = new IntersectionObserver(onChange, {
			rootMargin: '0px'
		})
		observer2.observe(document.getElementById('lazyInfo'))
	})

	return(
		<div id="lazyInfo">
			{
				show
				? <InfoHome2/>
				: null
			}
		</div>
	)
}