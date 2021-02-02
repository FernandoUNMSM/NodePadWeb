import React from 'react'
import './errormodal.css'

export default function Errormodal({ setError, message }) {
  const cerrarModal = () => {
    setError(false)
  }

  return (
    <>
      <div className="grayContainer error" title="errormodalContainer">
        <div className="errorContainer">
          <div className="equiserror">
            <div className="equis">
              <div className="equis1"></div>
              <div className="equis2"></div>
            </div>
          </div>
            <h1>{message}</h1>
            <button onClick={cerrarModal} className="errorbutton">Aceptar</button>
        </div>
      </div>
    </>
  )
}