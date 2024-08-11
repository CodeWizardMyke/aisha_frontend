import React from 'react'

import './ItemsCart.css'
import { RiDeleteBin6Line } from "react-icons/ri";


function ItemsCart({cartItems,setCartItems,index, data}) {

  const handddleRemoveAll = () =>{
    const cartUpdated = cartItems.filter( (item, i) => i !== index );
    setCartItems(cartUpdated)
  }

  const handdlerRemoveUnd = () => {
    const cartUpdated = cartItems.map((item,i) => {
      if(i === index && item.qtd_product > 1){
        item.qtd_product = item.qtd_product -1
      }
      return item;
    })
    setCartItems(cartUpdated)
  }

  return (
    <div className='item_cart_content'>
      <div className="items_cart_datails">
        <span className='title'>Titulo:{data.title.slice(0,100)}</span>
        <span>Marca: {data.brand} </span>
        <span>preço: {data.price} R$ </span>
        <span>qtd: {data.qtd_product}</span>
      </div>
      <div className='items_cart_footer'>
        <div className="cart_items_resume">
          <span>Soma dos items: {data.price * data.qtd_products} R$</span>
        </div>
        <div className="items_cart_tools">
          <button 
            className='btn_cart_tools'
            onClick={()=> handddleRemoveAll()}
            >Remover todos <RiDeleteBin6Line/> </button>
          <button 
            className='btn_cart_tools'
            onClick={()=> handdlerRemoveUnd()}

          >Remover unidade <RiDeleteBin6Line/> </button>
        </div>
      </div>
    </div>
  )
}

export default ItemsCart