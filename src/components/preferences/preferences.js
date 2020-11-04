import React, { useRef } from 'react'
import './preferences.css'

function Preferences({preferences}){
  const preferencesContainer = useRef(null)

  return(
    <>
      {
        (preferences)
        ?
          <div className="preferencesContainer" ref={preferencesContainer}>
          
          </div>
        : null
      }
    </>
  )
}
export default Preferences