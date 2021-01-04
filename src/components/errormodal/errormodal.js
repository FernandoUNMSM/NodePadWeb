import React from 'react'
import './errormodal.css'

export default function Errormodal({setError, message}) {
  const cerrarModal = () =>{
    setError(false)
  }

  return (
    <>
      <div className="grayContainer error">
        <div className="errorContainer">
          <h1>{message}</h1>
          <button onClick={cerrarModal}>ddd</button>
        </div>
      </div>
    </>
  )
}