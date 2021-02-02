import React, { useRef, useContext } from 'react'
import './cargar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FileContext from './../../context/fileContext'

function Cargar() {
  const { fileContent, setFileContent } = useContext(FileContext)

  const dropArea2 = useRef(null)

  const dragover = (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  const drop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    console.log(fileList[0]);

    var lector = new FileReader();
    lector.onload = function (e) {
      var contenido = e.target.result;
      var file = { file: { cuerpo: contenido }, len: 'html' }
      setFileContent(file);
    };
    lector.readAsText(fileList[0]);
  }

  const change = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target.parentNode)
    const archivo = formData.get('file');
    const lan = archivo.name.split('.')[1]
    if (archivo.name !== "") {
      var lector = new FileReader();
      lector.onload = function (e) {
        var contenido = e.target.result;
        console.log(contenido)
        var file = { file: { cuerpo: contenido }, len: lan }
        setFileContent(file);
        // console.log(contenido);
      };
      lector.readAsText(archivo);
    }
  }

  return (
    <>
      <div className="drop-areaContainer">
        <form action="" onChange={change} className="fileform" >
          <input type="file" name="file" ref={dropArea2} onDragOver={dragover} onDrop={drop} className="drop-area" />
          <div className="fileContain">
            <div className="fileIcon">
              <FontAwesomeIcon icon={faPlus} className="iconfile" />
            </div>
            <div className="fileInfo">
              <p>Arrastra un fichero o haz click para selecciona una</p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default Cargar