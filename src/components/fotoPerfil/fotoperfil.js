import React, {useRef, useEffect, useContext, useState} from 'react'
import './fotoperfil.css'
import sendPhoto from './../../services/sendPhoto'
import UserContext from './../../context/userContext'

export default function Fotoperfil() {
  // const {usuario} = useContext(UserContext)
  const id = JSON.parse(localStorage.getItem("usuarioActual")).id

  const [url, setUrl] = useState(null)

  const imprimir = (evt) =>{
    evt.preventDefault()
    const formData = new FormData(evt.target)
    // formData.set('id', id)
    sendPhoto({formData, id})
    .then((response=> setUrl(response)))
  }

  return (
    <>
      <div className="fotoContainer">
        <form action="" onSubmit={imprimir}>
          <div className="foto">
            <input type="file" name="file" id=""/>
          </div>
          <button>Gura</button>
        </form>
        <img src={url} alt="" width="100%"/>
      </div>
    </>
  )
}