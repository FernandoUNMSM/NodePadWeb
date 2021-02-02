import React, { useContext, useRef } from 'react'
import './guardar.css'
import sendFile from './../../services/sendFile'
import updateFile from './../../services/updateFile'
import FileContext from './../../context/fileContext'

export default function Guardar({ mostrarDatos, idfileHtml, idfileCss, idfileJs, leng, bodyfile }) {
  const { fileContent, setFileContent } = useContext(FileContext)
	let iduser = JSON.parse(localStorage.getItem("usuarioActual")).id;
  var nameDoc = useRef(null)

  const enviarFile = (evt) => {
    evt.preventDefault()
    if (leng === 'html') {
      if (idfileHtml === null) {
        sendFiles()
      } else {
        sendUpdateFile(idfileHtml)
      }
    } else if (leng === 'css') {
      if (idfileCss === null) {
        sendFiles()
      } else {
        sendUpdateFile(idfileCss)
      }
    } else if (leng === 'js') {
      if (idfileJs === null) {
        sendFiles()
      } else {
        sendUpdateFile(idfileJs)
      }
    }
  }
  const sendFiles = () => {
    let nombre = nameDoc.current.value;
    let jsonFile = {
      nombre: nombre,
      cuerpo: bodyfile,
      iduser: iduser,
      tipo: leng
    }
    // console.log(jsonFile);
    sendFile({ jsonFile })
    mostrarDatos();
  }

  const sendUpdateFile = (id) => {
    let nombre = nameDoc.current.value;
    let jsonFile = {
      nombre: nombre,
      cuerpo: bodyfile,
      tipo: leng
    }
    // console.log({ jsonFile: jsonFile, id: id })
    updateFile({ jsonFile: jsonFile, id: id })
    mostrarDatos();
  }

  return (
    <div className="guardarContainer" title="guardarContainer">
      <div className="datesPreview">
        <p>{(fileContent !== '{}') ? fileContent.file.cuerpo : null}</p>
      </div>
      <div className="datesRight">
        <div className="datesSave">
          <p className="datesP">Nombre:</p>
          <div className="col">
            <div className="inputBox">
              <form action="" id="file" onSubmit={enviarFile}>
                <input type="text" name="namedoc" required="required" autoComplete="off" ref={nameDoc}
                  pattern="[A-Za-z0-9_-]{1,15}"
                  defaultValue={(fileContent !== '{}') ? fileContent.file.nombre : null}
                />
                <span className="line"></span>
              </form>
            </div>
          </div>
        </div>
        <button className="datesButton" form="file">
          Guardar
        </button>
      </div>
    </div>
  )
}