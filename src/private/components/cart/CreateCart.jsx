import React, { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import './CreateCart.css'

import SearchProduct from '../search_product/SearchProduct';
import WindowCart from './WindowCart';


function CreateCart() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false)

  return (
    <div className='box-p10'>
      <div className='df-left'>
        <button 
          type='button'
          className='showCartItems'
          onClick={()=> setShowCart(true) }
        >Mostrar itens <FaCartPlus/></button>
      </div>
      {showCart && <WindowCart setShowCart={setShowCart} products={cartItems}/>}
      <div>
       <SearchProduct setCartItems={setCartItems}  cartItems={cartItems}/>
      </div>
    </div>
  )
}

export default CreateCart
