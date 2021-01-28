import React, { useState } from 'react'
import './editor.css'
import Editor from './../../components/editor/editor'
import MenuEditor from './../../components/menuEditor/menuEditor'
import Preferences from './../../components/preferences/preferences'
import Perfil from './../../components/perfil/perfil'
import Imagen from './../../components/imagen/imagen'
// import {useEffect} from 'react'
import Dates from './../../components/dates/dates'
import { FileContextProvider } from './../../context/fileContext'

function EditorHome() {
	const [layout, setLayout] = useState(false)
	const manejarLayout = (al) => { setLayout(al) }
	const [preferences, setPreferences] = useState(false)
	const [code, setCode] = useState(false)
	const [perfil, setPerfil] = useState(false)
	const [dates, setDates] = useState(false)
	const [lenguaje, setLenguaje] = useState("")
	const [bodyfile, setBodyfile] = useState("")
	const [imagen, setImagen] = useState(false)

	return (
		<>
			<div className="editorContainer" id="editorContainer" >
				{/* <h1>Editor culero</h1> */}
				<MenuEditor
					setLayout={manejarLayout}
					layout={layout}
					setPreferences={setPreferences}
					preferences={preferences}
					code={code}
					setPerfil={setPerfil}
					perfil={perfil}
				/>
				<Perfil state={perfil} setImagen={setImagen} />
				<Preferences preferences={preferences} setPreferences={setPreferences} />
				{
					(imagen)
						?
						<Imagen setImagen={setImagen}/>
						: null
				}
				<FileContextProvider>
					<Editor layout={layout} setCode={setCode} setDates={setDates} dates={dates} setLenguaje={setLenguaje} setBodyfile={setBodyfile} />
					{
						(lenguaje !== "")
							?
							<Dates dates={dates} setDates={setDates} lenguaje={lenguaje} bodyfile={bodyfile} />
							: null
					}
				</FileContextProvider>
			</div>
		</>
	)
}

export default EditorHome