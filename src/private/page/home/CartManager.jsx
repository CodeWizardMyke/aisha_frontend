import React, { useContext, useState } from 'react'

import './CartManager.css'

import { MdOutlineDoubleArrow } from "react-icons/md";
import { RiMenuFold4Fill } from "react-icons/ri";

import AppContext from '../../context/AppContext';

function CartManager() {
  const {managerMenu, setManagerMenu} = useContext(AppContext)
  const [ stateButton , setStateButton] = useState(false);

  return (
    <div className='manager_module_content'>
      <div className={`side_menu ${managerMenu ? 'side_menu-active' : ''}`}>
        <h2>Módulo de Carrinho</h2>
        <ul>
          <li>
            <button className='btn btn-mdl' type="button" onClick={()=>{ setStateButton('create') }}> <RiMenuFold4Fill /> Cadastrar</button>
          </li>
          <li>
            <button className='btn btn-mdl' type="button" onClick={()=>{ setStateButton('read') }}> <RiMenuFold4Fill /> Gerenciar</button>
          </li>
        </ul>
      </div>
      <div className='ProductManager_service'>
        <MdOutlineDoubleArrow 
          className='btn_active_menu'
          onClick={()=>{ setManagerMenu(!managerMenu)}}
        />

        { stateButton === 'create' && '<CreateCart/>'}
        { stateButton === 'read'   && '<ReadCart/>'}

      </div>
    </div>
  )
}

export default CartManager
