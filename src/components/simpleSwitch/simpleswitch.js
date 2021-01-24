import React from 'react'
import './simpleswitch.css'
import { useState, useRef, useEffect } from 'react'

function SimpleSwitch ({number}) {
  const [checked, setChecked] = useState(false)

  function handleCheck(evt) {
    setChecked(!checked)
    console.log(evt.target)
	}

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">
      </p>
      <input type="checkbox" onChange={handleCheck} defaultChecked={checked} className="checkbox" id={"checkbox".concat(number)}/>
      <label className="switch" htmlFor={"checkbox".concat(number)}>
      </label>
    </div>
  )
}
export default SimpleSwitch
