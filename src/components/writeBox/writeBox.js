import React, { useContext, useEffect, useState } from 'react'
import { faChevronDown, faDownload, faUpload, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { saveAs } from 'file-saver';
import './writeBox.css'
import FileContext from './../../context/fileContext'
// import PerfectScrollbar from 'perfect-scrollbar';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

function WriteBox({ lan, setCode, setDates, dates, setLenguaje, setBodyfile }) {
  const { fileContent, setFileContent } = useContext(FileContext)

  const [show, setShow] = useState(true)

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
    setLenguaje(lan)
    setDates(!dates)
    var body = document.getElementById(lan).value
    setBodyfile(body)
    // console.log(body)
    setFileContent({ file: { cuerpo: body }, len: lan.toLowerCase() })
  }

  const showTextarea = (evt) => {
    let textarea = evt.target.parentNode.parentNode.parentNode.parentNode.lastChild;
    let textareaContainer = evt.target.parentNode.parentNode.parentNode.parentNode;
    textareaContainer.classList.toggle('closeTextareaContainer')
    textarea.classList.toggle('closeTextarea')
    setShow(!show)
  }

  useEffect(() => {
    if (fileContent.len === lan.toLowerCase()) {
      let textareaContent = document.querySelector(`#${lan}`);
      textareaContent.value = fileContent.file.cuerpo;
    }
  }, [fileContent])//eslint-disable-line


  return (
    <>
      <div className="textarea">
        <div className="menuTextarea">
          <div className="leftTextarea">
            <p>{lan}</p>
            <div className="changeShow" >
              <FontAwesomeIcon icon={(show) ? faChevronUp : faChevronDown} className="icon"/>
              <div className="press" onClick={showTextarea} ></div>
            </div>
          </div>
          <div className="iconsTextarea">
            <FontAwesomeIcon icon={faDownload} className="icon" onClick={download} />
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