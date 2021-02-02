import React, { useEffect, useRef, useState, useContext } from 'react'
import './perfil.css'
import { faUserCircle, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import updateUser from './../../services/updateUser'
import { useLocation } from 'wouter'
import UserContext from './../../context/userContext'

function Perfil({ state, setImagen }) {
  const [location, setLocation] = useLocation(); //eslint-disable-line
  const [modificar, setModificar] = useState(true)
  const [usuarioActual, setUsuarioActual] = useState(JSON.parse(localStorage.getItem("usuarioActual")))
  const perfil = useRef(null)
  const { imageA, setImageA } = useContext(UserContext)

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
      .then(res => setUsuarioActual(res))
  }

  const cerrarSesion = () => {
    // setUsuario(null)
    localStorage.setItem("usuarioActual", "{}")
    setLocation("/");
  }
  const mostrarInputFile = () => {
    setImagen(true)
  }
  // useEffect(() =>{
  //   console.log(imageA)
  // },[imageA])
  return (
    <>
      <div className="perfilContainer" ref={perfil}>
        <div className="fotoPerfilContainer">
          <div className="foto" onClick={mostrarInputFile}>
            <div className="fotoPerfil">
              {
                (imageA !== null)
                  ? <img src={imageA} alt="" />
                  : <FontAwesomeIcon icon={faUserCircle} className="userPhoto" />
              }
            </div>
            <FontAwesomeIcon icon={faCamera} className="camera" />
          </div>
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
                <form id="update" onSubmit={enviarUpdate} encType="multipart/form-data">
                  <p>
                    <span>Nombre: </span>
                    <input type="text" name="nombre" defaultValue={usuarioActual.nombre} required="required"/>
                  </p>
                  <p>
                    <span>Apellido: </span>
                    <input type="text" name="apellido" defaultValue={usuarioActual.apellido} required="required"/>
                  </p>
                  <p>
                    <span>Nombre de usuario: </span>
                    <input type="text" name="usuario" defaultValue={usuarioActual.usuario} required="required"/>
                  </p>
                  <p>
                    <span>E-mail: </span>
                    <input type="text" name="email" defaultValue={usuarioActual.email} required="required"/>
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