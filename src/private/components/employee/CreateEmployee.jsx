import React, { useState } from 'react'

import './CreateEmployee.css'
import Loading from '../loading/Loading';
import aishaFetch from '../../axios/config';

function CreateEmployee() {
  const [loading, setLoading] = useState(false)
  let errors = []

  const handleSubmit =  async (e) => {
    try {
      setLoading(true)
      e.preventDefault()
      updateErrorsSpan()
      const formData = new FormData(document.getElementById('myForm'))
  
      const response = await aishaFetch.post('/employee/crud/create',formData)
      createdFeedback(response)
    } catch (error) {
      const {data} = error.response ?  error.response : { data:undefined }
      if(data){ handdlerErrorsPost(data) }
    }
  }

  function handdlerErrorsPost(data){
    errors = data.errors
    if(errors.length > 0) {
      data.errors.map( (e) => document.querySelector(`.errors-${e.path}`).innerHTML = e.msg )
    }
    
  }
  function updateErrorsSpan(){
   if(errors.length > 0){
    errors.map( (e) =>  document.querySelector(`.errors-${e.path}`).innerHTML = '' )
   }
  }
  
  function createdFeedback(response){
    document.querySelector('.response-msg').style.display = 'flex'
    document.querySelector('.response-msg').innerHTML = `Criado com sucesso!`
    setTimeout(() => {
      document.querySelector('.response-msg').style.display = 'none'
    }, 2000)
  }

  function resetForm(e) {
    e.preventDefault();
    e.target.closest('form').reset();
  }

  return (
    <div className='box-p10'>
      <h2>Registrar novo funcionário</h2>
      {loading ? <Loading/> : ''}

      <form 
        id='myForm'
        className='form_small'
        onSubmit={handleSubmit}  
      >
        <div className="form-group w-30">
          <label htmlFor="name">Nome completo:</label>
          <input type="text" id="name" name="name"  placeholder="Nome do funcionário" />
          <div className="error errors-name"></div>
        </div>

        <div className="form-group w-15">
          <label htmlFor="employee_role">Cargo:</label>
          <select  className='custom-select' name="employee_role" id="employee_role">
            <option value="admin">Administrador</option>
            <option value="manager">Gerente</option>
            <option value="employee">Funcionário</option>
          </select>
          <div className="error errors-employee_role"></div>
        </div>

        <div className="form-group w-30">
          <label htmlFor="email">Email / Login:</label>
          <input type="email" id="email" name="email"  placeholder="funcionario@email.com"/>
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

      <div className="response-msg"></div>
    </div>
  )
}

export default CreateEmployee
