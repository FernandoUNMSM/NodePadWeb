import React, { useState } from 'react'
import './editor.css'
import Editor from './../../components/editor/editor'
import MenuEditor from './../../components/menuEditor/menuEditor'

function EditorHome() {
    const [layout, setLayout] = useState(false)
    const manejarLayout = (al) => { setLayout(al) }
    return (
        <>
            <MenuEditor setLayout={manejarLayout} layout={layout} />
            <Editor layout={layout} />
        </>
    )
}
export default EditorHome