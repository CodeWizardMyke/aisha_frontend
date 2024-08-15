import React from 'react'

function TableItemCart({data,setCartSelect}) {
  return (
    <tr onClick={ ()=> setCartSelect(data) }>
      <td>{data.cart_id}</td>
      <td>{data.qtd_products}</td>
      <td>{data.amount}</td>
      <td>{data.state}</td>
      <td>{data.delivery}</td>
    </tr>
  )
}

export default TableItemCart