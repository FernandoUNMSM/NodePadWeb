import React, {useRef, useEffect, useState} from 'react'
import './formato.css'

const Formato = () => {
  const fontSize = useRef(null)
  const fontColor = useRef(null)
  // const color = document.getElementById('color').value;
  const [config,setConfig] = useState(JSON.parse(localStorage.getItem("configActual")))
  // const [color,setSize] = useState(null)

  const sendPreference = (evt) => {
    evt.preventDefault();
    applyChanges();
  }

  const applyChanges = () => {
    var container = document.querySelectorAll('.textarea textarea');
    const size = fontSize.current.value
    const color = fontColor.current.value;
    container.forEach(textarea => {
      textarea.style.fontSize = `${size}px`;
      textarea.style.color = color
    })

    const config = {
      size,
      color
    }
    localStorage.setItem("configActual",JSON.stringify(config))
  }

  useEffect(() => {
    // setConfig();
    console.log(config)
  },[])

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
              <input type="number" name="" id="" min="1" pattern="^[0-9]+" required ref={fontSize} defaultValue={config.size}/>
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
              <input type="text" name="" id="" />
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