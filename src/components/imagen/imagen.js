import React, { useRef, useState } from 'react'
import './imagen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import Fotoperfil from './../fotoPerfil/fotoperfil'

function Imagen({setImagen}) {
  // const [url, setUrl] = useState(null)

  const [foto, setFoto] = useState(false)

  const dropArea = useRef(null)
  const formfile = useRef(null)
  const [formDataFile, setFormDataFile] = useState("")

  const dragover = (event) => {
    // console.log('kk')
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  const drop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    // console.log(fileList[0]);
    const formData = new FormData(formfile.current)
    formData.set('file', fileList[0])

    setFormDataFile(formData)
    setFoto(true)
  }


  const imprimir = (evt) =>{
    evt.preventDefault()
    const formData = new FormData(evt.target.parentNode)
    // formData.set('id', id)
    console.log(formData.get('file'));
    if(formData.get('file').name !== ""){
      setFormDataFile(formData)
      setFoto(true)
    }
    // sendPhoto({formData, id})
    // .then((response=> setUrl(response)))
  }

  const cerrarInputFile = () => {
    setImagen(false)
  }

  return (
    <>
      <div className="grayContainer">
        <FontAwesomeIcon icon={faTimes} className="cerrarInput" onClick={cerrarInputFile}/>
        <div className="datesContainer imagenContainer">
          <div className="drop-areaContainer">
            <form action="" onChange={imprimir} className="fileform" ref={formfile}>
              <input type="file" name="file" ref={dropArea} onDragOver={dragover} onDrop={drop} className="drop-area" />
              <div className="fileContain">
                <div className="fileIcon">
                  <FontAwesomeIcon icon={faPlus} className="iconfile" />
                </div>
                <div className="fileInfo">
                  <p>Arrastra una imagen o haz click para selecciona una</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {
          (foto) ? <Fotoperfil formData={formDataFile} setFoto={setFoto} setImagen={setImagen}/> : null
        }
      </div>
    </>
  )
}
export default Imagen
