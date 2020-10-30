import { faAdjust, faBars, faBorderAll, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import Switch from './../switch/switch'
import SelectLayout from './../selectLayout/selectLayout'
import './menuEditor.css'

function MenuEditor({setLayout, layout}) {
	// const menu = useRef(null)

	// const menuActive = () => {
	// 	menu.current.classList.add('menuActive')
	// }
	// const menuLock = () => {
	// 	menu.current.classList.remove('menuActive')
	// }
	return (
		<>
			<div className="menuEditor">
				<div className="menuContent">
					<div className="burguerMenu">
						<FontAwesomeIcon icon={faBars} className="icon"/>
					</div>
					<div className="theme">
						<div className="menuIcon">
							<FontAwesomeIcon icon={faAdjust} className="icon"/>
						</div>
						<div className="menuItemContent ">
							<Switch />
						</div>
					</div>
					<div className="layout">
						<div className="menuIcon">
							<FontAwesomeIcon icon={faBorderAll} className="icon"/>
						</div>
						<div className="menuItemContent">
							<SelectLayout setLayout={setLayout} layout={layout}/>
						</div>
					</div>
					<div className="preferences">
						<div className="menuIcon">
							<FontAwesomeIcon icon={faCog} className="icon"/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default MenuEditor
