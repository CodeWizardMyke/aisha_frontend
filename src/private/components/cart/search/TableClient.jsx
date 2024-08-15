import React from 'react'

function TableClient({data,setClientSelect,setSearchNav}) {

  function handdlerSelectClient(){
    setClientSelect(data);
    setSearchNav({pClient:false,pCart:true,pShowCat:false})
  }

  return (
    <tr onClick={ ()=> handdlerSelectClient() }>
      <td>{data.client_id}</td>
      <td>{data.clientName}</td>
      <td>{data.clientInstagram}</td>
      <td>{data.clientPhone}</td>
      <td>{data.clientCpf}</td>
    </tr>
  )
}

export default TableClient