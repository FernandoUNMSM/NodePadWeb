import { faAdjust, faBars, faBorderAll, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Switch from './../switch/switch'
import SelectLayout from './../selectLayout/selectLayout'
import './menuEditor.css'

function MenuEditor({setLayout, layout, setPreferences, preferences}) {
	const mostrarPreferences = ()=> {
		setPreferences(!preferences)
	}
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
							<FontAwesomeIcon icon={faCog} className="icon"
								onClick={mostrarPreferences}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default MenuEditor
