import React,{useEffect, useState} from 'react';
import AppContext from './AppContext';

function Provider({children}) {

  const [employee, setEmployee] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [managerMenu, setManagerMenu] = useState(true);

  useEffect(()=>{
    const localEmployee = JSON.parse(localStorage.getItem('employee'));
    const localToken = JSON.parse(localStorage.getItem('token'));
    if(localEmployee && localToken){
      setEmployee(localEmployee);
      setToken(localToken);
    }
  },[])

  const value = {
    employee,
    setEmployee,
    token,
    setToken,
    loading,
    setLoading,
    managerMenu, setManagerMenu,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider
