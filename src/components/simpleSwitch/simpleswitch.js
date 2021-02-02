import React from 'react'
import './simpleswitch.css'
import { useState, useRef, useEffect } from 'react'
import updateLocalstorage from './../../services/updatelocalstorage'

function SimpleSwitch({ number }) {

  let descargacomp = JSON.parse(localStorage.getItem("configActual")).descargacomp
  let descargaunit = JSON.parse(localStorage.getItem("configActual")).descargaunit


  const buttondesccomp = document.querySelector('.download')
  const buttondescunit = document.querySelectorAll('.download-icon-mini')


  const [che, setChe] = useState((bool) => {
    if (bool !== undefined) {
      return bool
    }
    if (number === 1) {
      return (descargaunit === 1) ? true : false
    } else {
      return (descargacomp === 1) ? true : false
    }
  })
  const [checked, setChecked] = useState(che)

  function handleCheck(evt) {
    setChecked(!checked)

    if (evt.target.id === 'checkbox1') {
      if (evt.target.checked) {
        updateLocalstorage({ descargaunit: 1 })
        // buttondescunit.style.display = 'inline-block'
        buttondescunit.forEach((bu)=> bu.style.display = 'inline-block')
      } else {
        updateLocalstorage({ descargaunit: 0 })
        // buttondescunit.style.display = 'none'
        buttondescunit.forEach((bu)=> bu.style.display = 'none')
      }
    } else {
      if (evt.target.checked) {
        updateLocalstorage({ descargacomp: 1 })
        buttondesccomp.style.display = 'block'
      } else {
        updateLocalstorage({ descargacomp: 0 })
        buttondesccomp.style.display = 'none'
      }
    }
  }

  const change = () => {
    let check = document.querySelector("#checkbox".concat(number))
    if (check.checked) {
      check.checked = false
      console.log('jj')
    } else {
      check.checked = true
    }
    console.log(check.checked)
  }

  return (
    <div className="dark-mode" title="simpleSwitch">
      <p className="dark-mode-title">
      </p>
      <input type="checkbox" onClick={handleCheck} defaultChecked={checked} className="checkbox" id={"checkbox".concat(number)} />
      <label className="switch" htmlFor={"checkbox".concat(number)}>
      </label>
    </div>
  )
}
export default SimpleSwitch
