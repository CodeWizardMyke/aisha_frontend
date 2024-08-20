import React from 'react'
import './PopUp.css'

function PopUp({message, state}) {
  return (
    <div className='wrapper-popup' >
      <div>
        <h4>{ message ? message : "Sucesso!" }</h4>
      </div>
    </div>
  )
}

export default PopUp