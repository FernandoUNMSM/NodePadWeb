import React, {useRef, useEffect, useContext, useState} from 'react'
import './fotoperfil.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sendPhoto from './../../services/sendPhoto'
import UserContext from './../../context/userContext'


export default function Fotoperfil({formData, setFoto, setImagen}) {
  const id = JSON.parse(localStorage.getItem("usuarioActual")).id

  const image = useRef(null)
  const { imageA, setImageA } = useContext(UserContext)

  useEffect(() => {
    renderImage()
  },[formData])

  const renderImage = () => {
    const file = formData.get('file')
    const imagen = URL.createObjectURL(file)
    image.current.setAttribute('src', imagen)
  }

  const cerrarPreview = () => {
    setFoto(false)
  }
  const enviarFoto = () => {
    sendPhoto({formData, id})
      .then(response => {
        setImageA(response)
        setImagen(false)
      })
  }

  return (
    <>
      <div className="datesContainer fotoContainer">
        <div className="fotomenu" onClick={cerrarPreview}>
          <FontAwesomeIcon icon={faArrowLeft} className="arrowleftpreview"/>
        </div>
        <img src="" alt="" ref={image}/>
        <button className="enviarFoto" onClick={enviarFoto}>Aceptar</button>
      </div>
    </>
  )
}