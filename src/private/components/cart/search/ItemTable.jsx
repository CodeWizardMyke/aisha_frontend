import React from 'react'

function ItemTable({data,setClientSelect}) {
  return (
    <tr onClick={ ()=> setClientSelect(data) }>
      <td>{data.client_id}</td>
      <td>{data.clientName}</td>
      <td>{data.clientInstagram}</td>
      <td>{data.clientPhone}</td>
      <td>{data.clientCpf}</td>
    </tr>
  )
}

export default ItemTable