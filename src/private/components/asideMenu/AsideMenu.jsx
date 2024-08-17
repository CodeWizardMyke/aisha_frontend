import React, { useContext } from 'react'

import { Link } from 'react-router-dom';
import { RiMenuFold4Fill } from "react-icons/ri";
import AppContext from '../../context/AppContext';

function AsideMenu() {
  const {managerMenu} = useContext(AppContext)

  return (
    <div className='manager_module_content'>
        <div  className={`side_menu ${managerMenu ? 'side_menu-active' : ''}`} >
        <h2>Módulos</h2>
        <ul>
          <li>
            <Link className='btn btn-mdl' to="/manager/product"> <RiMenuFold4Fill /> Produtos</Link>
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
