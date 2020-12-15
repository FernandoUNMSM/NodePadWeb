import React, { useEffect } from 'react'
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { saveAs } from 'file-saver';
import './writeBox.css'

function WriteBox({ lan, setCode, setDates, dates, setLenguaje }) {
  const showPreview = (evt) => {
    let code = '';
    code = evt.target.value

    if (lan === 'HTML') {
      setCode(code)
    }
    else if (lan === 'CSS') {
      setCode(code)
    }
    else if (lan === 'JS') {
      setCode(code)
    }
  }
  const download = () => {
    let file;
    let textareaContent = document.querySelector(`#${lan}`).value;
    let down = `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link src="styles.css"/>
          <title>Project NodePadWeb</title>
        </head>
        <body>
          ${textareaContent}
          <script src="index.js"></script>
        </body>
      </html>
    `
    if (lan === 'HTML') {
      file = new File([down], "index.html", {
        type: "text/html",
      });
    }
    else if (lan === 'CSS') {
      file = new File([textareaContent], "styles.css", {
        type: "text/css",
      });
    }
    else if (lan === 'JS') {
      file = new File([textareaContent], "index.js", {
        type: "text/javascript",
      });
    }
    saveAs(file)
  }

  const mostrarDatos = () => {
    setLenguaje (lan)
    setDates (!dates)
  }

  return (
    <>
      <div className="textarea">
        <div className="menuTextarea">
          <p>{lan}</p>
          <div className="iconsTextarea">
            <FontAwesomeIcon icon={faDownload} className="icon" onClick={download}/>
            <FontAwesomeIcon icon={faUpload} className="icon" onClick={mostrarDatos} />
          </div>
        </div>
        <textarea
          name={lan}
          placeholder={`${lan} Code`}
          onChange={showPreview}
          id={lan}>
        </textarea>
      </div>
    </>
  )
}
export default WriteBox