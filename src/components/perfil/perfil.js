import React from 'react'
import './perfil.css'
import { useEffect, useRef, useState } from 'react'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Perfil({ state }) {
  const [modificar, setModificar] = useState(true)

  let usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"))
  // useEffect(() => {
  //   console.log(modificar)
  // }, [modificar])

  const perfil = useRef(null)

  useEffect(() => {
    (state)
      ? perfil.current.classList.add('perfilOn')
      : perfil.current.classList.remove('perfilOn')
  }, [state])

  const modoCambiar = () => {
    setModificar(!modificar)
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
                <form action="">
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
              <button onClick={modoCambiar}>Guardar Cambios</button>
          }
          <button>Cerrar Sesion</button>
        </div>
      </div>
    </>
  )
}

export default Perfil