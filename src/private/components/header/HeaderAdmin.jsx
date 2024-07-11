import React from 'react'
import { SiNginxproxymanager } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import {Link}  from 'react-router-dom'

import './HeaderAdmin.css'

function HeaderAdmin() {
  return (
    <div className='fixed_header'>
      <header className='container adm-header'>
        <div className="logo-adm">
          <SiNginxproxymanager />
          <Link to='/manager/'>
            <span>Manager.</span>
          </Link>
        </div>
        <div className="adm-tools">
          <IoSettingsOutline />
          <BiMessageAltDetail />
        </div>
      </header>
    </div>
  )
}

export default HeaderAdmin
