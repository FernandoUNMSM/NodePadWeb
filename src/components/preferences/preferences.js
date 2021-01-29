import React, { useRef, useState } from 'react'
import './preferences.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Formato from './../formatoletra/formato'
import Fotoperfil from './../fotoPerfil/fotoperfil'
import Eliminar from './../eliminarcuenta/eliminar'
import Descarga from './../descarga/descarga'

function Preferences({ preferences, setPreferences }) {
  const preferencesContainer = useRef(null)
  const [preference, setPreference] = useState('1')

  const showPreferences = (event) => {
    setPreference(event.target.id)
  }

  const renderPreferences = () => {
    switch (preference) {
      case '1':
        return <div className="preference 1">
          <Formato />
        </div>
      case '2':
        return <div className="preference 2">
          <Descarga/>
        </div>
      case '3':
        return <div className="preference 3">3</div>
      case '4':
        return <div className="preference 4">
          {/* <Fotoperfil/> */}
        </div>
      case '5':
        return <div className="preference 5">
          <Eliminar/>
        </div>
      default:
        return null;
    }
  }

  const closePreferences = () => {
    setPreferences(!preferences)
  }

  return (
    <>
      {
        (preferences)
          ?
          <div className="grayContainer">
            <div className="preferencesContainer" ref={preferencesContainer}>
              <div className="menuPreferences">
                <p id="1" onClick={showPreferences}>Editor</p>
                <p id="2" onClick={showPreferences}>Descargas</p>
                <p id="5" onClick={showPreferences}>Cuenta</p>
                <p id="4" onClick={showPreferences}>Información</p>
              </div>
              <div className="preferences">
                {renderPreferences()}
              </div>
              <FontAwesomeIcon icon={faTimes} className="closePreferences" onClick={closePreferences} />
            </div>
          </div>
          : null
      }
    </>
  )
}
export default Preferences