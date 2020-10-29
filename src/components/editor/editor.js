import React, { useRef } from 'react'
import './editor.css'

function Editor() {

	const html = useRef(null)
	const css = useRef(null)
	const js = useRef(null)

	const showPreview = evt => {
		let code = '';
		code = evt.target.value
		if(evt.target.name === 'HTML'){
			console.log("HTML")
			html.current.innerHTML = code
		}else if(evt.target.name === 'CSS'){
			console.log("CSS")
			css.current.innerHTML = code
		}else{
			console.log("JS")
			js.current.innerHTML = code
		}
	}

	return (
		<>
			<div className="editor">
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
					<div id="preview" title="preview">
						<body ref={html} className="content"></body>
						<style ref={css} className="styles"></style>
						<script ref={js} className="scripts"></script>
					</div>
				</div>
			</div>
		</>
	)
}
export default Editor