import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './EmployeeAuth.css';

import aishaFetch from '../../axios/config';
import AppContext from '../../context/AppContext';
import Loading from '../../components/loading/Loading';

function EmployeeAuth() {
  const navigate = useNavigate();
  const {employee, setEmployee, setToken, loading, setLoading} = useContext(AppContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => { setLoading(false); }, [setLoading]);

  const oldEmployee = localStorage.getItem("employee");
  const oldToken = localStorage.getItem('token')
  if(oldEmployee && oldToken) {
    setEmployee(oldEmployee);
    setToken(oldToken);

    navigate('/manager');
  };

  const getEmployee = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
  
      const response = await aishaFetch.post('/auth/login', {email: email,password: password,});

      localStorage.setItem('employee', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);

      setToken(response.data.token);
      setEmployee(response.data.user);
    } catch (error) {
      
      const {data} = error.response;
      data.map(e => (
        document.querySelector(`.error-${e.path}`).textContent = e.msg
      ));
      setLoading(false);
    }
  };

  useEffect( ()=> {
    if(employee) navigate('/manager')

  },[employee, navigate])

  return (
    <div className='EmployeeAuth_content'>
      { loading && <Loading/>}
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
          <span className='error-email'>.</span>
        </div>
        <div>
          <label htmlFor='password'>Senha:</label>
          <input 
            type='password'
            id='password'
            required
            onChange={(e) => setPassword(e.target.value)} 
          />
          <span className="error-password">.</span>
        </div>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  )
}

export default EmployeeAuth;
