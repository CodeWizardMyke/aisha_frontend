import { IoMdCloseCircleOutline } from "react-icons/io";
import aishaFetch from '../../axios/config';
import { useState } from "react";
import Loading from "../loading/Loading";

function UpdateEmployee({employee, onClose, setItemsUpdated}) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const updateItem =  async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      updateErrorsSpan();
      const formData = new FormData(e.target);
  
      await aishaFetch.put('/employee/crud/update',formData,{headers: {employee_id: employee.employee_id} });
      createdFeedback();

    } catch (error) {
      setLoading(false);

      const {data} = error.response ?  error.response : { data:undefined };

      if(data){ handdlerErrorsPost(data) };
    }
  };

  function handdlerErrorsPost(data){
    setErrors(data.errors);
    data.errors.map( (e) => document.querySelector(`.errors-${e.path}`).innerHTML = e.msg );
  };
  function updateErrorsSpan(){
   if(errors.length > 0){
    errors.map( (e) =>  document.querySelector(`.errors-${e.path}`).innerHTML = '' );
   };
   setErrors([])
  };
  
  function createdFeedback(){
    setItemsUpdated(true);
    setLoading(false)

    let spanMsg = document.querySelector('.stateCreate');
    if(spanMsg){
      spanMsg.style.display = 'flex'
      setTimeout(() => {
        spanMsg.style.display = 'none'
        onClose(true)
      }, 2000)
    };
  }

  function resetForm(e) {
    e.preventDefault();
    e.target.closest('form').reset();
  }

  return (
    <div className='content_form'>
        <div className='form_title_hs'>
          <h2>Atualizar funcionário</h2>
          <span className="stateCreate">Funcionário atualizado com sucesso!</span>
          <button type="button" onClick={onClose} className='close_button'>close <IoMdCloseCircleOutline/> </button>
        </div>
        <form onSubmit={updateItem}>
          {loading ? <Loading/> : ''}
          <div className="form-group w-30">
            <label htmlFor="name">Nome completo:</label>
            <input type="text" id="name" name="name"  placeholder={employee.name} />
            <div className="error errors-name"></div>
          </div>

          <div className="form-group w-15">
            <label htmlFor="employee_role">Cargo:</label>
            <select  className='custom-select' name="employee_role" id="employee_role" defaultValue={employee.employee_role}>
              <option value="admin">Administrador</option>
              <option value="manager">Gerente</option>
              <option value="employee">Funcionário</option>
            </select>
            <div className="error errors-employee_role"></div>
          </div>

          <div className="form-group w-30">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"  placeholder={employee.email} />
            <div className="error errors-email"></div>
          </div>

          <div className="form-group w-30">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
            <div className="error errors-password"></div>
          </div>

          <div className="form-group w-30">
            <label htmlFor="re_password">Digite novamente sua senha:</label>
            <input type="password" id="re_password" name="re_password" />
            <div className="error errors-re_password"></div>
          </div>

          <div className='button_content'>
              <button type="button"  className="reset-button" onClick={resetForm}>Limpar</button>
              <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
    </div>
  )
}

export default UpdateEmployee
