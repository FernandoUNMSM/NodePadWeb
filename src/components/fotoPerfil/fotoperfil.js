import React, {useRef, useEffect, useContext, useState} from 'react'
import './fotoperfil.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Fotoperfil({formData, setFoto}) {
  const image = useRef(null)

  useEffect(() => {
    console.log(formData)
    renderImage()
  },[formData])

  const renderImage = () => {
    const file = formData.get('file')
    const imagen = URL.createObjectURL(file)
    console.log(image.current)
    image.current.setAttribute('src', imagen)
  }

  const cerrarPreview = () => {
    setFoto(false)
  }

  return (
    <>
      <div className="datesContainer fotoContainer">
        <div className="fotomenu" onClick={cerrarPreview}>
          <FontAwesomeIcon icon={faArrowLeft} className="arrowleftpreview"/>
        </div>
        <img src="" alt="" ref={image}/>
      </div>
    </>
  )
}