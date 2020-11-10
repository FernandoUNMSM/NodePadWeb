import React, { useState } from 'react'
import './editor.css'
import Editor from './../../components/editor/editor'
import MenuEditor from './../../components/menuEditor/menuEditor'
import Preferences from './../../components/preferences/preferences'

function EditorHome() {
	const [layout, setLayout] = useState(false)
	const manejarLayout = (al) => { setLayout(al) }
	const [preferences, setPreferences] = useState(false)
	const [code, setCode] = useState(false)
	return (
		<>
			<MenuEditor
				setLayout={manejarLayout}
				layout={layout}
				setPreferences={setPreferences}
				preferences={preferences}
				code={code}
				/>
			<Editor layout={layout} setCode={setCode}/>
			<Preferences preferences={preferences} />
		</>
	)
}

export default EditorHome