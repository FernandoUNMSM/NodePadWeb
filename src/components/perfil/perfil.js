import React from 'react'
import './perfil.css'
import { useEffect, useRef } from 'react'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Perfil({ state }) {
  let usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"))
  useEffect(() => {
    console.log(state)
  }, [state])

  const perfil = useRef(null)

  useEffect(() => {
    (state)
    ? perfil.current.classList.add('perfilOn')
    : perfil.current.classList.remove('perfilOn')
  }, [state])

  useEffect(() => {
  },[])

  return (
    <>
      <div className="perfilContainer" ref={perfil}>
        <div className="foto">
          <FontAwesomeIcon icon={faUserCircle} className="userPhoto"/>
        </div>
        <div className="infoUser">
          <p><span>Nombre: </span> {usuarioActual.nombre}</p>
          <p><span>Apellido: </span> {usuarioActual.apellido}</p>
          <p><span>Nombre de usuario: </span> {usuarioActual.usuario}</p>
          <p><span>E-mail: </span> {usuarioActual.email}</p>
        </div>
        <div className="buttonsPerfil">
          <button>Modificar Datos</button>
          <button>Cerrar Sesion</button>
        </div>
      </div>
    </>
  )
}

export default Perfil