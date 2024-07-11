import React, { useContext, useState } from 'react'
import { RiMenuFold4Fill } from "react-icons/ri";
import { MdOutlineDoubleArrow } from "react-icons/md";

import './ProductManager.css'
import AppContext from '../../context/AppContext';
import CreateProduct from '../../components/product/CreateProduct';

function ProductManager() {
  const {managerMenu, setManagerMenu} = useContext(AppContext)
  const [createProduct, setCreateProduct] = useState(false);

  return (
    <div className='manager_module_content'>
      <div className={`side_menu ${managerMenu ? 'side_menu-active' : ''}`}>
        <h2>Módulo de Produtos</h2>
        <ul>
          <li>
            <button className='btn btn-mdl' type="button" onClick={()=>{ setCreateProduct(!createProduct) }}> <RiMenuFold4Fill /> Cadastrar</button>
          </li>
          <li>
            <button className='btn btn-mdl' type="button"> <RiMenuFold4Fill /> Gerenciar</button>
          </li>
          <li>
            <button className='btn btn-mdl' type="button"> <RiMenuFold4Fill /> Visualizar</button>
          </li>
          <li>
            <button className='btn btn-mdl' type="button"> <RiMenuFold4Fill /> Alterar</button>
          </li>
          <li>
            <button className='btn btn-mdl' type="button"> <RiMenuFold4Fill /> Excluir</button>
          </li>
        </ul>
      </div>
      <div className='ProductManager_service'>
        <MdOutlineDoubleArrow 
          className='btn_active_menu'
          onClick={()=>{ setManagerMenu(!managerMenu)}}
        />

        { createProduct && <CreateProduct/>}

      </div>
    </div>
  )
}

export default ProductManager
