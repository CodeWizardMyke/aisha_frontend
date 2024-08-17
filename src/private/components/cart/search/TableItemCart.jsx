import React from 'react'

function TableItemCart({data,setCartSelect,setSearchNav}) {

  function hunddlerSetCart() {
    setCartSelect(data)
    setSearchNav({pClient:false,pCart:false,pShowCart:true})
  }

  return (
    <tr onClick={ ()=> hunddlerSetCart() }>
      <td>{data.cart_id}</td>
      <td>{data.qtd_products}</td>
      <td>{data.amount}</td>
      <td>{data.state}</td>
      <td>{data.delivery}</td>
    </tr>
  )
}

export default TableItemCart