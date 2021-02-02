import React, {useRef, useEffect, useState} from 'react'
import './formato.css'
import updateLocalstorage from './../../services/updatelocalstorage'

const Formato = () => {
  const fontSize = useRef(null)
  const fontColor = useRef(null)
  const fontFamily = useRef(null)
  // const color = document.getElementById('color').value;
  const [config,setConfig] = useState(JSON.parse(localStorage.getItem("configActual")))
  // const [color,setSize] = useState(null)

  const sendPreference = (evt) => {
    evt.preventDefault();
    applyChanges();
  }

  const applyChanges = () => {
    var container = document.querySelectorAll('.textarea textarea');
    const zise = fontSize.current.value
    const color = fontColor.current.value
    const font = fontFamily.current.value
    container.forEach(textarea => {
      textarea.style.fontSize = `${zise}px`
      textarea.style.color = color
      textarea.style.fontFamily = font
    })
    updateLocalstorage({zise, color, font});

  }

  return (
    <>
      <div className="formatoContainer">
        <div className="containerRes">
          <div className="formatoTitulo">
            <h1>Preferencias del Editor</h1>
          </div>
          <form action="" id="formato" onSubmit={sendPreference}>
            <div className="formatoItem formato1">
              <p>Font Size</p>
              <p className="formatoP">Tamaño de fuente del editor</p>
              <input type="number" name="" id="" min="1" max="30" pattern="^[0-9]+" required ref={fontSize} defaultValue={config.zise}/>
            </div>
            <div className="formatoItem formato2">
              <p>Font Color</p>
              <p className="formatoP">Color de fuente del editor</p>
              {/* <p>{color}</p> */}
              <input type="color" name="" id="color" required ref={fontColor} defaultValue={config.color}/>
            </div>
            <div className="formatoItem formato3">
              <p>Font Family</p>
              <p className="formatoP">Tipo de fuente del editor</p>
              <input type="text" name="font" id="" ref={fontFamily} defaultValue={config.font}/>
            </div>
          </form>
        </div>
        <div className="buttonF">
          <button form="formato">Aplicar</button>
        </div>
      </div>
    </>
  )
}

export default Formato