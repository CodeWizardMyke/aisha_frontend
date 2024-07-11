import React, { useContext, useState } from 'react';
import './EmployeeAuth.css';
import aishaFetch from '../../axios/config';
import AppContext from '../../context/AppContext';
import { useNavigate } from 'react-router-dom'

function EmployeeAuth() {
  const {setEmployee, setToken} = useContext(AppContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const localEmployee = localStorage.getItem('employee');
  const localToken = localStorage.getItem('token');
  if(localEmployee && localToken){
    navigate('/manager/')
  }

  
  const getEmployee = async (event) => {
    event.preventDefault();
    try {
      const response = await aishaFetch.post('/auth/login', {email, password,});

      localStorage.setItem('employee',  JSON.stringify(response.data.user));
      localStorage.setItem('token', JSON.stringify(response.data.token));

      setEmployee(response.data.user);
      setToken(response.data.token);
      navigate('/manager/')

    } catch (error) {
      console.error(error.response);
      setError("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div className='EmployeeAuth_content'>
      <form 
        className='form_employee_auth'
        onSubmit={getEmployee}
      >
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            required 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor='password'>Senha:</label>
          <input 
            type='password'
            id='password'
            required
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type='submit'>Entrar</button>
        <div className="errors">
          {error && <p className="error-message">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default EmployeeAuth;
