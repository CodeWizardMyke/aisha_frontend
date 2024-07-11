import React,{useEffect, useState} from 'react';
import AppContext from './AppContext';

function Provider({children}) {

  const [employee, setEmployee] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menuActive, setMenuActive] = useState(true);

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
    menuActive, setMenuActive,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider
