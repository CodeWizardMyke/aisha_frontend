import React, { useEffect, useState } from 'react'
import './MessageFeedback.css'
import { FaRegCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

function MessageFeedback({state, setToggle}) {
  const [ handdlerState, setHanddlerState] = useState(null);

  return (
    <div className='wrapper-message'>
      <div className={ handdlerState ? 'wm-box wm-box-sucess' :  'wm-box wm-box-fail'}  >
        <div className="wrapper-icons">
          {handdlerState ? <FaRegCheckCircle/> : <MdError/> }
        </div>
        <div className="wc-message">
          {handdlerState ? <span>A requisição teve sucesso!</span> : <span>A Requisição Falhou!</span> }
        </div>
      </div>
      <button type='button' className='bt bt-close'onClick={setToggle} >Fechar</button>
    </div>
  )
}

export default MessageFeedback