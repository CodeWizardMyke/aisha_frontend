import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import './QuickAcess.css'
import { MdOutlineDoubleArrow } from "react-icons/md";
import AppContext from '../../context/AppContext';
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { FaLuggageCart } from "react-icons/fa";


function QuickAcess() {
  const { menuActive, setMenuActive} = useContext(AppContext)

  return (
    <div className='QuickAcess'>
      <MdOutlineDoubleArrow 
        className='btn_active_menu'
        onClick={()=> { setMenuActive(!menuActive) }} 
      />
      <h2>Acesso Rápido</h2>
      <ul className='QuickAcessList'>
        <li>
          <Link className='btn-lg' to="/manager/product"><MdProductionQuantityLimits />Produtos</Link>
        </li>
        <li>
          <Link className='btn-lg' to="/manager/employee"><FaUsersGear />Funcionários</Link>
        </li>
        <li>
          <Link className='btn-lg' to="/manager/cart"><FaLuggageCart />Carrinho clientes</Link>
        </li>
      </ul>
    </div>
  )
}

export default QuickAcess
