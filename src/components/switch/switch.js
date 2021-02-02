import React from 'react'
import { useState, useRef, useEffect } from 'react'
import './switch.css'
import updateLocalstorage from './../../services/updatelocalstorage'

const Body = document.body

function Switch() {
	const [checked, setChecked] = useState(false)
	//true oscuro false blanco
	const ref = useRef(null)

	const thema = JSON.parse(localStorage.getItem("configActual")).tema

	let tema

	function handleThemeChange() {
		setChecked(!checked)
		if (ref.current.checked) {
			Body.classList.remove('is-light-mode')
			Body.classList.add('is-dark-mode')
			tema = 1
		} else {
			Body.classList.remove('is-dark-mode')
			Body.classList.add('is-light-mode')
			tema = 0
		}
		updateLocalstorage({tema})
	}

	function changeMedia(mq) {
		setChecked(mq.matches)
		handleThemeChange()
	}

	useEffect(() => {
		if (thema === 1) {
			setChecked(true)
			Body.classList.remove('is-light-mode')
			Body.classList.add('is-dark-mode')
		} else {
			setChecked(false)
			Body.classList.remove('is-dark-mode')
			Body.classList.add('is-light-mode')
		}
	}, [])

	return (
		<div className="dark-mode" title="switch">
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