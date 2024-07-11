import React, { useContext } from 'react'

import './AsideMenu.css';
import { Link } from 'react-router-dom';
import { RiMenuFold4Fill } from "react-icons/ri";
import AppContext from '../../context/AppContext';
import { FaLuggageCart } from "react-icons/fa";

function AsideMenu() {
  const {menuActive} = useContext(AppContext)
  return (
    <div>
        <div className={`AsideMenu ${menuActive ? 'AsideAcitve' : ''}`} >
        <h2>Módulos</h2>
        <ul className='nav-menu-modules'>
          <li>
            <Link className='btn btn-mdl' to="/manager/products"> <RiMenuFold4Fill /> Produtos</Link>
          </li>
          <li>
            <Link className='btn btn-mdl' to="/manager/cart"> <RiMenuFold4Fill /> Carrinho</Link>
          </li>
          <li>
            <Link className='btn btn-mdl' to="/manager/employee"> <RiMenuFold4Fill /> Funcionários</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AsideMenu
