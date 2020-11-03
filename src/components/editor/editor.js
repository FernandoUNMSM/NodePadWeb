import React, { useEffect, useRef } from 'react'
import './editor.css'

function Editor({ layout }) {
	const frame = useRef(null)
	const editor = useRef(null)
	let html = ''
	let css = ''
	let js = ''

	const showPreview = (evt) => {
		let code = '';
		code = evt.target.value
		if (evt.target.name === 'HTML') {
			html = code
		} else if (evt.target.name === 'CSS') {
			css = `<style>${code}</style>`
		} else {
			js = `<script>${code}</script>`
		}
		frame.current.contentWindow.document.open()
		frame.current.contentWindow.document.write(html + css + js)
		frame.current.contentWindow.document.close()
	}
	useEffect(() => {
		// console.log(layout)
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
	return (
		<>
			<div className="editor vertical" ref={editor}>
				<div className="codeArea">
					<textarea
						name="HTML"
						placeholder="HTML Code"
						onChange={showPreview}>
					</textarea>
					<textarea
						name="CSS"
						placeholder="CSS Code"
						onChange={showPreview}>
					</textarea>
					<textarea
						name="JS"
						placeholder="JS Code"
						onChange={showPreview}>
					</textarea>
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