import { faAdjust, faBars, faBorderAll, faCog, faDownload, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useEffect } from 'react'
import Switch from './../switch/switch'
import SelectLayout from './../selectLayout/selectLayout'
import './menuEditor.css'
import { Link } from 'wouter'
import JSZip from 'jszip'
import { saveAs } from 'file-saver';

function MenuEditor({ setLayout, layout, setPreferences, preferences, code }) {
	var zip = new JSZip()
	zip.file("index.html", code.html)
	zip.file("index.css", code.css)
	zip.file("index.js", code.js)

	const download = () => {
		// console.log(code)
		zip.generateAsync({ type: "blob" })
			.then(function (content) {
				// see FileSaver.js
				saveAs(content, "example.zip");
			});
	}
	const mostrarPreferences = () => {
		setPreferences(!preferences)
	}
	return (
		<>
			<div className="menuEditor">
				<div className="menuContent">
					<div className="burguerMenu">
						<FontAwesomeIcon icon={faBars} className="icon" />
					</div>
					<div className="perfil">
						<div className="menuIcon">
							<FontAwesomeIcon icon={faUserCircle} className="icon" />
						</div>
					</div>
					{/* <div className="backHome">
						<div className="menuIcon">
							<Link to="/">
								<FontAwesomeIcon icon={faHome} className="icon" />
							</Link>
						</div>
					</div> */}
					<div className="theme">
						<div className="menuIcon">
							<FontAwesomeIcon icon={faAdjust} className="icon" />
						</div>
						<div className="menuItemContent ">
							<Switch />
						</div>
					</div>
					<div className="layout">
						<div className="menuIcon">
							<FontAwesomeIcon icon={faBorderAll} className="icon" />
						</div>
						<div className="menuItemContent">
							<SelectLayout setLayout={setLayout} layout={layout} />
						</div>
					</div>
					<div className="preferencesOption">
						<div className="menuIcon">
							<FontAwesomeIcon icon={faCog} className="icon"
								onClick={mostrarPreferences}
							/>
						</div>
					</div>
					{/* <div className="download">
						<div className="menuIcon" >
							<FontAwesomeIcon icon={faDownload} className="icon" onClick={download}/>
						</div>
					</div> */}
				</div>
			</div>
		</>
	)
}
export default MenuEditor
