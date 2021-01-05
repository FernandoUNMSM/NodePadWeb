import React, { useContext, useEffect, useState } from 'react'
import './writeBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faDownload, faUpload, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import { saveAs } from 'file-saver';
import FileContext from './../../context/fileContext'

function WriteBox({ lan, setCode, setDates, dates, setLenguaje, setBodyfile }) {
  const { fileContent, setFileContent } = useContext(FileContext)

  const [show, setShow] = useState(true)

  const [nameHtml, setNameHtml] = useState(null)
  const [nameCss, setNameCss] = useState(null)
  const [nameJs, setNameJs] = useState(null)

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

    let newFile = fileContent
    if (fileContent !== '{}') {
      newFile.file.cuerpo = body
    } else {
      newFile = { file: { cuerpo: body }, len: lan.toLowerCase() }
    }
    //Actualizamos el nombre del archivo actual del context
    if (lan === 'HTML') {
      newFile.file.nombre = nameHtml
    } else if (lan === 'CSS') {
      newFile.file.nombre = nameCss
    } else if (lan === 'JS') {
      newFile.file.nombre = nameJs
    }
    console.log()
    setFileContent(newFile)
  }


  const showTextarea = (evt) => {
    let textarea = evt.target.parentNode.parentNode.parentNode.parentNode.lastChild;
    let textareaContainer = evt.target.parentNode.parentNode.parentNode.parentNode;
    textareaContainer.classList.toggle('closeTextareaContainer')
    textarea.classList.toggle('closeTextarea')
    setShow(!show)
  }

  const quitarFile = () => {
    var body = document.getElementById(lan).value
    setBodyfile(body)
    setFileContent({ file: { cuerpo: body }, len: lan.toLowerCase() })
    console.log(fileContent)
    if (lan === 'HTML') {
      setNameHtml(null)
    } else if (lan === 'CSS') {
      setNameCss(null)
    } else if (lan === 'JS') {
      setNameJs(null)
    }
  }

  useEffect(() => {
    if (fileContent.len === lan.toLowerCase()) {
      let textareaContent = document.querySelector(`#${lan}`);
      textareaContent.value = fileContent.file.cuerpo;

      if (lan === 'HTML') {
        setNameHtml(fileContent.file.nombre)
      } else if (lan === 'CSS') {
        setNameCss(fileContent.file.nombre)
      } else if (lan === 'JS') {
        setNameJs(fileContent.file.nombre)
      }
    }
  }, [fileContent])//eslint-disable-line

  return (
    <>
      <div className="textarea">
        <div className="menuTextarea">
          <div className="leftTextarea">
            <p>{lan}</p>
            <div className="changeShow" >
              <FontAwesomeIcon icon={(show) ? faChevronUp : faChevronDown} className="icon" />
              <div className="press" onClick={showTextarea} ></div>
            </div>
          </div>
          {
            (fileContent !== '{}')
              ?
              <div className="textareaName">
                {
                  (lan === 'HTML')
                    ? <>
                      <input type="text" name="" id="htmlT" defaultValue={nameHtml} disabled />
                      {
                        (nameHtml !== null && nameHtml !== undefined) ? <FontAwesomeIcon icon={faTimes} className="cerrarName" onClick={quitarFile}/> : null
                      }
                    </>
                    : null
                }
                {
                  (lan === 'CSS')
                    ? <>
                      <input type="text" name="" id="cssT" defaultValue={nameCss} disabled />
                      {
                        (nameCss !== null && nameCss !== undefined) ? <FontAwesomeIcon icon={faTimes} className="cerrarName" onClick={quitarFile}/> : null
                      }
                    </>
                    : null
                }
                {
                  (lan === 'JS')
                    ? <>
                      <input type="text" name="" id="jsT" defaultValue={nameJs} disabled />
                      {
                        (nameJs !== null && nameJs !== undefined) ? <FontAwesomeIcon icon={faTimes} className="cerrarName" onClick={quitarFile}/> : null
                      }
                    </>
                    : null
                }
              </div>
              : null
          }
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