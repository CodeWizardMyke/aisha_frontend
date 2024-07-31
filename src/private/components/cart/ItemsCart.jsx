import React from 'react'

import './ItemsCart.css'
import { RiDeleteBin6Line } from "react-icons/ri";


function ItemsCart({cartItems,setCartItems,index}) {

  const handddleRemoveAll = () =>{
    const cartUpdated = cartItems.filter( (item, i) => i !== index );
    setCartItems(cartUpdated)
  }

  const handdlerRemoveUnd = () => {
    const cartUpdated = cartItems.map((item,i) => {
      if(i === index){
        item.qtd_product = item.qtd_product -1
      }
      return item;
    })

    setCartItems(cartUpdated)
  }

  return (
    <div className='item_cart_content'>
      <div className="items_cart_cartItemsils">
        <span className='title'>Titulo:{cartItems.title}</span>
        <span>Marca: {cartItems.brand} </span>
        <span>preço: {cartItems.price} R$ </span>
        <span>qtd: {cartItems.qtd_product}</span>
      </div>
      <div className='items_cart_footer'>
        <div className="cart_items_resume">
          <span>Soma dos items: {cartItems.price * cartItems.qtd_product} R$</span>
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