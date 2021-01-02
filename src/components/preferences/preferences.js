import React, { useRef, useState } from 'react'
import './preferences.css'
import Cuenta from './../cuenta/cuenta'

function Preferences({preferences}){
  const preferencesContainer = useRef(null)
  const [preference, setPreference] = useState(1)

  const showPreferences = (event) => {
    setPreference(event.target.id)
  }

  const renderPreferences = () => {
    switch (preference) {
      case '1':
        return <div className="preference 1">1</div>
      case '2':
        return <div className="preference 2">2</div>
      case '3':
        return <div className="preference 3">3</div>
      case '4':
        return <div className="preference 4">4</div>
      case '5':
        return <div className="preference 5">
          <Cuenta/>
        </div>
      default:
        return null;
    }
  }

  return(
    <>
      {
        (preferences)
        ?
          <div className="preferencesContainer" ref={preferencesContainer}>
            <div className="menuPreferences">
              <p id="1" onClick={showPreferences}>Editor</p>
              <p id="2" onClick={showPreferences}>Descargas</p>
              <p id="3" onClick={showPreferences}>Opcion 3</p>
              <p id="4" onClick={showPreferences}>Opcion 4</p>
              <p id="5" onClick={showPreferences}>Opcion 5</p>
            </div>
            <div className="preferences">
              {renderPreferences()}
            </div>
          </div>
        : null
      }
    </>
  )
}
export default Preferences