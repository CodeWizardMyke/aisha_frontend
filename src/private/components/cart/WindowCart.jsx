import React from 'react'
import './WindowCart.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import ItemsCart from './ItemsCart';

function WindowCart({cartItems,setShowCart, setCartItems}) {

  return (
    <div className="content_window__box">
      <div className='window__box'>
        <div className="window_header">
          <h3 className="window_title">Items do carrinho</h3>
          <div className='window_tools'>
            <button 
              type='button'
              className='window_close'
              onClick={()=> setShowCart(false)}
            >close <IoMdCloseCircleOutline/> </button>
          </div>
        </div>
        <div className="window__body">
          {
            cartItems.map( (item, index) => <ItemsCart key={index}  index={index} data={item} cartItems={cartItems}  setCartItems={setCartItems} />  )
          }
        </div>
      </div>
    </div>
  )
}

export default WindowCart