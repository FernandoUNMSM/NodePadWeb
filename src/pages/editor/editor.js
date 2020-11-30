import React, { useState } from 'react'
import './editor.css'
import Editor from './../../components/editor/editor'
import MenuEditor from './../../components/menuEditor/menuEditor'
import Preferences from './../../components/preferences/preferences'
import Perfil from './../../components/perfil/perfil'
// import {useEffect} from 'react'

function EditorHome() {
	const [layout, setLayout] = useState(false)
	const manejarLayout = (al) => { setLayout(al) }
	const [preferences, setPreferences] = useState(false)
	const [code, setCode] = useState(false)
	const [perfil, setPerfil] = useState(false)
	// useEffect(() => {
	// 	console.log(perfil)
	// },[perfil])
	return (
		<>
			<div className="editorContainer">
				<MenuEditor
					setLayout={manejarLayout}
					layout={layout}
					setPreferences={setPreferences}
					preferences={preferences}
					code={code}
					setPerfil={setPerfil}
					perfil={perfil}
					/>
				<Perfil state={perfil}/>
				<Editor layout={layout} setCode={setCode}/>
				<Preferences preferences={preferences} />
			</div>
		</>
	)
}

export default EditorHome