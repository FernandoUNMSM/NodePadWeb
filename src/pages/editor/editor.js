import React, { useState } from 'react'
import './editor.css'
import Editor from './../../components/editor/editor'
import MenuEditor from './../../components/menuEditor/menuEditor'
import Preferences from './../../components/preferences/preferences'
import Dates from './../../components/dates/dates'

function EditorHome() {
	const [layout, setLayout] = useState(false)
	const manejarLayout = (al) => { setLayout(al) }
	const [preferences, setPreferences] = useState(false)
	const [code, setCode] = useState(false)
	const [dates, setDates] = useState(false)
	const [lenguaje, setLenguaje] = useState("")

	return (
		<>
			<MenuEditor
				setLayout={manejarLayout}
				layout={layout}
				setPreferences={setPreferences}
				preferences={preferences}
				code={code}
				/>
			<Editor layout={layout} setCode={setCode} setDates={setDates} dates={dates} setLenguaje={setLenguaje}/>
			<Preferences preferences={preferences} />
			<Dates dates={dates} setDates={setDates} lenguaje={lenguaje}/>
		</>
	)
}

export default EditorHome