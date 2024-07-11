
import { useContext, useEffect } from "react";
import "./FooterAdmin.css"
import { FaUserLock } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import AppContext from "../../context/AppContext";
function FooterAdmin() {
  const {employee} = useContext(AppContext);

  useEffect(() => {
    console.log(employee)
    if(employee){
      document.getElementById('employee_role').textContent = `Cargo: ${employee.employye_office}`;
    }
  },[employee])

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
        <button type="button" className="btn-logout__employee">Sair <IoExitOutline/></button>
      </div>
    </footer>
  )
}

export default FooterAdmin
