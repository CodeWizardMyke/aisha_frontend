import React, { useContext, useState } from 'react'

import './EmployeeManager.css'

import { MdOutlineDoubleArrow } from "react-icons/md";
import { RiMenuFold4Fill } from "react-icons/ri";

import AppContext from '../../context/AppContext';
import CreateEmployee from '../../components/employee/CreateEmployee';

function EmployeeManager() {
  const {managerMenu, setManagerMenu} = useContext(AppContext)
  const [ stateButton , setStateButton] = useState(false);

  return (
    <div className='manager_module_content'>
      <div className={`side_menu ${managerMenu ? 'side_menu-active' : ''}`}>
        <h2>Módulo de Funcionários</h2>
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

        { stateButton === 'create' && <CreateEmployee/>}
        { stateButton === 'read'   && '<ReadEmployee/>'}

      </div>
    </div>
  )
}

export default EmployeeManager
