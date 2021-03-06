import React, { useEffect, useRef, useState, useContext} from 'react'
import './editor.css'
import WriteBox from './../writeBox/writeBox'
import FileContext from './../../context/fileContext'


function Editor({ layout, setCode, setDates, dates, setLenguaje, setBodyfile }) {
	const frame = useRef(null)
	const editor = useRef(null)

	const [html, setHTML] = useState('')
	const [css, setCSS] = useState('')
	const [js, setJS] = useState('')
	const config = JSON.parse(localStorage.getItem("configActual"))

  const { fileContent } = useContext(FileContext)


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
    const zise = config.zise
		const color = config.color
		const font = config.font
    var container = document.querySelectorAll('.textarea textarea');
    container.forEach(textarea => {
      textarea.style.fontSize = `${zise}px`;
			textarea.style.color = color;
			textarea.style.fontFamily = font
		})

		const buttondesccomp = document.querySelector('.download')
		const buttondescunit = document.querySelectorAll('.download-icon-mini')
		if(config.descargaunit === 1){
			buttondescunit.forEach((bu)=> bu.style.display = 'inline-block')
		}else{
			buttondescunit.forEach((bu)=> bu.style.display = 'none')
		}
		if(config.descargacomp === 1){
			buttondesccomp.style.display = 'block'
		}else{
			buttondesccomp.style.display = 'none'
		}
	},[])

	useEffect(() => {
		setCode({
			'html': html,
			'css': css,
			'js': js
		})
		frame.current.contentWindow.document.open()
		frame.current.contentWindow.document.write(html + `<style>${css}</style>` + `<script>${js}</script>`)//eslint-disable-line
		frame.current.contentWindow.document.close()
	},[html,css,js]) //eslint-disable-line
	return (
		<>
			<div className="editor vertical" ref={editor}>
				<div className="codeArea">
					<WriteBox lan="HTML" setCode={setHTML} setDates={setDates} dates={dates} setLenguaje = {setLenguaje} setBodyfile={setBodyfile}/>
					<WriteBox lan="CSS" setCode={setCSS} setDates={setDates} dates={dates} setLenguaje = {setLenguaje} setBodyfile={setBodyfile}/>
					<WriteBox lan="JS" setCode={setJS} setDates={setDates} dates={dates} setLenguaje = {setLenguaje} setBodyfile={setBodyfile}/>
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