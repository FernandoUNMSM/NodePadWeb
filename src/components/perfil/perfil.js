import React from 'react'
import './perfil.css'
import { useEffect, useRef, useState } from 'react'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import updateUser from './../../services/updateUser'
import { Link, useLocation } from 'wouter'

function Perfil({ state }) {
	const [location, setLocation] = useLocation(); //eslint-disable-line
  const [modificar, setModificar] = useState(true)
  const [usuarioActual, setUsuarioActual] = useState(JSON.parse(localStorage.getItem("usuarioActual")))
  const perfil = useRef(null)

  useEffect(() => {
    (state)
      ? perfil.current.classList.add('perfilOn')
      : perfil.current.classList.remove('perfilOn')
  }, [state])

  const modoCambiar = () => {
    setTimeout(() => {
      setModificar(!modificar)
    }, 1)
  }

  const enviarUpdate = (event) => {
    const formData = new FormData(event.target)
    event.preventDefault();
    updateUser(formData)
      .then(() => setUsuarioActual(JSON.parse(localStorage.getItem("usuarioActual"))))
  }

  const cerrarSesion = () =>{
    localStorage.setItem("usuarioActual", "{}")
    setLocation("/");
  }

  return (
    <>
      <div className="perfilContainer" ref={perfil}>
        <div className="foto">
          <FontAwesomeIcon icon={faUserCircle} className="userPhoto" />
        </div>
        <div className="infoUser">
          {
            (modificar)
              ?
              <>
                <p><span>Nombre: </span>{usuarioActual.nombre}</p>
                <p><span>Apellido: </span>{usuarioActual.apellido}</p>
                <p><span>Nombre de usuario: </span>{usuarioActual.usuario}</p>
                <p><span>E-mail: </span>{usuarioActual.email}</p>
              </>
              :
              <>
                <form id="update" action="POST" onSubmit={enviarUpdate} encType="multipart/form-data">
                  <p>
                    <span>Nombre: </span>
                    <input type="text" name="nombre" defaultValue={usuarioActual.nombre} />
                  </p>
                  <p>
                    <span>Apellido: </span>
                    <input type="text" name="apellido" defaultValue={usuarioActual.apellido} />
                  </p>
                  <p>
                    <span>Nombre de usuario: </span>
                    <input type="text" name="usuario" defaultValue={usuarioActual.usuario} />
                  </p>
                  <p>
                    <span>E-mail: </span>
                    <input type="text" name="email" defaultValue={usuarioActual.email} />
                  </p>
                </form>
              </>
          }
        </div>

        <div className="buttonsPerfil">
          {
            (modificar)
              ?
              <button onClick={modoCambiar}>Modificar Datos</button>
              :
              <button form="update" onClick={modoCambiar}>Guardar Cambios</button>
          }
          <button onClick={cerrarSesion}>Cerrar Sesion</button>
        </div>
      </div>
    </>
  )
}

export default Perfil