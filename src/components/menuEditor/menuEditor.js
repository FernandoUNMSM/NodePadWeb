import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import './menuEditor.css'

function MenuEditor() {
	const menu = useRef(null)

	const menuActive = ()=> {
		menu.current.classList.add('menuActive')
	}
	const menuLock = ()=> {
		menu.current.classList.remove('menuActive')
	}
	return (
		<>
			<div className="menuEditor" ref={menu}>
				<div className="burguerMenu"
				onMouseEnter={menuActive}
				onMouseLeave={menuLock}
				>
					<FontAwesomeIcon icon={faBars} className="icon"/>
				</div>
			</div>
		</>
	)
}
export default MenuEditor
