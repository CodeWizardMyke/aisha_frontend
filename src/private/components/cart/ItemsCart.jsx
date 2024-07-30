import React from 'react'

import './ItemsCart.css'
import { RiDeleteBin6Line } from "react-icons/ri";


function ItemsCart({data}) {
  return (
    <div className='item_cart_content'>
      <div className="items_cart_datails">
        <span className='title'>Titulo:{data.title}</span>
        <span>Marca: {data.brand} </span>
        <span>preço: {data.price} R$ </span>
        <span>qtd: {data.qtd_product}</span>
      </div>
      <div className='items_cart_footer'>
        <div className="cart_items_resume">
          <span>Soma dos items: {data.price * data.qtd_product} R$</span>
        </div>
        <div className="items_cart_tools">
          <button className='btn_cart_tools'>Remover todos <RiDeleteBin6Line/> </button>
          <button className='btn_cart_tools'>Remover unidade <RiDeleteBin6Line/> </button>
        </div>
      </div>
    </div>
  )
}

export default ItemsCart