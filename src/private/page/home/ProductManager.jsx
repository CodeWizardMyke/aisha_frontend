import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { RiMenuFold4Fill } from "react-icons/ri";
import { MdOutlineDoubleArrow } from "react-icons/md";

import './ProductManager.css'
import AppContext from '../../context/AppContext';

import CreateProduct from '../../components/product/CreateProduct';
import verifyAuthUser from '../../utils/verifyAuthUser';
import SearchProducts from '../../components/product/SearchProducts';

function ProductManager() {
  const navigate = useNavigate()
  const userAtuh = verifyAuthUser()
  
  if (!userAtuh) {
    navigate('/manager/auth')
  }

  const {managerMenu, setManagerMenu} = useContext(AppContext)
  const [ stateButton , setStateButton] = useState(false);

  return (
    <div className='manager_module_content'>
      <div className={`side_menu ${managerMenu ? 'side_menu-active' : ''}`}>
        <h2>Módulo de Produtos</h2>
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

        { stateButton === 'create' && <CreateProduct/>}
        { stateButton === 'read'   && <SearchProducts/>}

      </div>
    </div>
  )
}

export default ProductManager
