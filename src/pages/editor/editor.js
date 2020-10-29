import React from 'react'
import './editor.css'
import Editor from './../../components/editor/editor'
import MenuEditor from './../../components/menuEditor/menuEditor'
function editorHome() {
    return (
        <>
            <MenuEditor />
            <Editor />
        </>
    )
}
export default editorHome