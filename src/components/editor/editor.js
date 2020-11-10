import React, { useEffect, useRef, useState } from 'react'
import './editor.css'
import WriteBox from './../writeBox/writeBox'

function Editor({ layout, setCode }) {
	const frame = useRef(null)
	const editor = useRef(null)

	const [html, setHTML] = useState('')
	const [css, setCSS] = useState('')
	const [js, setJS] = useState('')

	useEffect(() => {
		if(layout === 'vertical'){
			editor.current.className = "editor vertical"
		}else if(layout === 'horizontal'){
			editor.current.className = "editor horizontal"
		}else if(layout === 'verticalInverso'){
			editor.current.className = "editor verticalInverso"
		}else if(layout === 'horizontalInverso'){
			editor.current.className = "editor horizontalInverso"
		}
	}, [layout])

	useEffect(() => {
		setCode({
			'html': html,
			'css': css,
			'js': js
		})
		frame.current.contentWindow.document.open()
		frame.current.contentWindow.document.write(html + `<style>${css}</style>` + `<script>${js}</script>`)
		frame.current.contentWindow.document.close()
	},[html,css,js]) //eslint-disable-line
	return (
		<>
			<div className="editor vertical" ref={editor}>
				<div className="codeArea">
					<WriteBox lan="HTML" setCode={setHTML} />
					<WriteBox lan="CSS" setCode={setCSS} />
					<WriteBox lan="JS" setCode={setJS} />
				</div>
				<div className="previewArea">
					<iframe id="preview" title="preview" src="./iframe.html" ref={frame}>
					</iframe>
				</div>
			</div>
		</>
	)
}
export default Editor