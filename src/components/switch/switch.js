import React from 'react'
import './switch.css'
import { useState, useRef, useEffect } from 'react'

const Body = document.body

function Switch() {
	const [checked, setChecked] = useState(false)
	//true oscuro false blanco
	const ref = useRef(null)

	function handleThemeChange() {
		// console.log(event.target.checked)
		setChecked(!checked)
		if (ref.current.checked) {
			Body.classList.remove('is-light-mode')
			Body.classList.add('is-dark-mode')
		} else {
			Body.classList.remove('is-dark-mode')
			Body.classList.add('is-light-mode')
		}
		// console.log(checked)
	}

	function changeMedia(mq) {
		setChecked(mq.matches)
		handleThemeChange()
	}

	useEffect(() => {
		// Body.classList.add('is-light-mode')
		if (ref.current.checked) {
			Body.classList.remove('is-light-mode')
			Body.classList.add('is-dark-mode')
		} else {
			Body.classList.remove('is-dark-mode')
			Body.classList.add('is-light-mode')
		}
		// const mq = window.matchMedia('(prefers-color-scheme: dark)')
		// mq.addListener(changeMedia)
		// setChecked(mq.matches)
	}, [])

	return (
		<div className="dark-mode">
			<p className="dark-mode-title">
				{
					checked
						? 'Dark '
						: 'Light '
				}
				Mode
			</p>
			<input ref={ref} onChange={handleThemeChange} type="checkbox" checked={checked} className="checkbox" id="checkbox" />
			{/* Siempre hay que cerrar las etiquetas en JSX */}
			<label className="switch" htmlFor="checkbox">

			</label>
		</div>
	)
}

export default Switch