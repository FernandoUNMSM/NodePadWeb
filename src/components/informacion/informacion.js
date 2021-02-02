import React, { useRef, useEffect, useState } from 'react'
import updateLocalstorage from './../../services/updatelocalstorage'

const Informacion = () => {

  return (
    <>
      <div className="formatoContainer">
        <div className="containerRes">
          <div className="formatoTitulo">
            <h1>Informacion</h1>
          </div>
          <div className="formatoItem">
            <p>Cabellos Rojas, Oscar</p>
            <p className="formatoP">Correo: oscar.cabellos@unmsm.edu.pe</p>
          </div>
          <div className="formatoItem">
            <p>Gutierrez Albujar, Sergio</p>
            <p className="formatoP">Correo: sergio.gutierrez@unmsm.edu.pe</p>
          </div>
          <div className="formatoItem">
            <p>Rodriguez Mirano, Sebastian</p>
            <p className="formatoP">Correo: sebastian.rodriguez1@unmsm.edu.pe</p>
          </div>
          <div className="formatoItem">
            <p>Muñoz Silva, Brayan</p>
            <p className="formatoP">Correo: brayan.munoz1@unmsm.edu.pe</p>
          </div>
          <div className="formatoItem">
            <p>Alvarez Levano, Jose</p>
            <p className="formatoP">Correo: jose.alvarez11@unmsm.edu.pe</p>
          </div>
          <div className="formatoItem">
            <p>Repositorio GitHub</p>
            <p className="formatoP">Enlace: <a href="https://github.com/FernandoUNMSM/NodePadWeb" target="_blank" rel="noreferrer">https://github.com/FernandoUNMSM/NodePadWeb</a></p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Informacion