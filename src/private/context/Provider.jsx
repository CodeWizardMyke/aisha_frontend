import React,{useState} from 'react';
import AppContext from './AppContext';


function Provider({children}) {

  const [employee, setEmployee] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  if(!employee){
    const oldData = localStorage.getItem(employee);
    if(oldData) setEmployee(oldData);
  }

  if(!token){
    const oldToken = localStorage.getItem(token);
    if(oldToken) setToken(oldToken);
  }
  console.log(employee)

  const value = {
    employee,
    setEmployee,
    token,
    setToken,
    loading,
    setLoading,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider
