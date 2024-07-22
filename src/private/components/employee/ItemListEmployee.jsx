import React, { useState } from 'react'

import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

import aishaFetch from '../../axios/config';

function ItemListEmployee({employee,setItemsUpdated, setLoading}) {
  const [showMore, setShowMore] = useState(false)

  const handleShowForm = (employee) => {
    setShowMore(true);
  };

  const handleCloseForm = () => {
    setShowMore(false);
  };


  function deleteEmployee (){
    setLoading(true);
    aishaFetch.delete('/employee/crud/destroy', {headers:{employee_id: employee.employee_id}} )
    .then(response => { 
      setItemsUpdated(true)
      setLoading(false)
      console.log(response)
    })
    .catch(error => {
      setLoading(false)
      console.log(error) 
    })
  }
  console.log(employee)

  return (
    <>
      <li>
        <div className="item_info">
          <div className='item_title_id'>
            <span>{`Nome: ${employee.name} | `}</span>
            <h3>{`Cargo: ${employee.employee_role}`}</h3>
          </div>
        <p>{`Email: ${employee.email}`}</p>
        </div>
          <div className="item_actions">
          <button type="button" className='bt_delete' onClick={deleteEmployee}>Excluir <RiDeleteBin5Line /> </button>
          <button type="button" className='bt_edit'  onClick={ handleShowForm } >Editar <CiEdit /> </button>
        </div>
      </li>
      { showMore && '<UpdateProduct product={product} setLoading={setLoading}  onClose={handleCloseForm} setItemsUpdated={setItemsUpdated} />'}
    </>
    
  )
}

export default ItemListEmployee
