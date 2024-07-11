import { useNavigate } from 'react-router-dom'
import AppContext from "../../context/AppContext";

import "./FooterAdmin.css"
import { useContext, useEffect } from "react";
import { FaUserLock } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";


function FooterAdmin() {
  const {employee,setEmployee, setToken} = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(employee)
    if(employee){
      document.getElementById('employee_role').textContent = `Cargo: ${employee.employee_role}`;
    }
  },[employee])

  const btnExit = () => {
    if(employee){
      localStorage.removeItem('employee');
      localStorage.removeItem('token');
      setEmployee(null);
      setToken(null);
      navigate('/manager/auth');
    }
  }

  return (
    <footer className="adm-footer">
      <div className="footer-left">
        <div>
          <div className="employee_auth">
            <FaUserLock/>
            <span id="employee_role">Cargo:</span>
          </div>
        </div>
        <div className="app_build">
          <span>Série: 001</span>
          <span>Versão: 001</span>
        </div>
      </div>
      <div className="footer-rigth">
        <button 
          type="button"
          className="btn-logout__employee"
          onClick={btnExit}
        >Sair <IoExitOutline/></button>
      </div>
    </footer>
  )
}

export default FooterAdmin
