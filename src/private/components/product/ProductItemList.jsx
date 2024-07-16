import React from 'react'
import { useNavigate}  from 'react-router-dom'

import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

function ProductItemList({product}) {

  function showMoreProduct(product){
    console.log(product)
  }

  return (
    <li onClick={ () => { showMoreProduct(product)} }>
      <div className="item_info">
        <div className='item_title_id'>
          <span>{`ID: ${product.product_id} ,`}</span>
          <h3>{`Titulo: ${product.title}`}</h3>
        </div>
      <p>{`Descrição: ${product.discribe.slice(0, 50) + '...'}`}</p>
      </div>
        <div className="item_actions">
        <button type="button" className='bt_delete'>Excluir <RiDeleteBin5Line /> </button>
        <button type="button" className='bt_edit'>Editar <CiEdit /> </button>
      </div>
    </li>
  )
}

export default ProductItemList
