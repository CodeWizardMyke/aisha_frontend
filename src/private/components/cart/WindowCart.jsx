import React, { useEffect, useState } from 'react'
import './WindowCart.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import ItemsCart from './ItemsCart';
import aishaFetch from '../../axios/config';

function WindowCart({cartItems,setShowCart, setCartItems}) {
  const [ cartPrice, setCartPrice] = useState(0);
  const [cartQtdItems, setCartQtdItems] = useState(0);
  const [username, setUsername] = useState('');
  const [instagram, setInstagram] = useState('');
  
  useEffect(()=>{
    let cart_price = cartItems.reduce((acc, item) => (item.price * Number(item.qtd_product)) + acc,0);
    let cart_qtd_items = cartItems.reduce((acc, item) => Number(item.qtd_product) + acc,0);

    setCartQtdItems(cart_qtd_items);
    setCartPrice(cart_price)
  },[cartItems])


  function sendCartClient(){

    if(cartItems.length >0){

      let createCart = {
        clientName:username,
        clientInstagram:instagram,
        itemsInCart:cartItems
      }
  
      aishaFetch.post('/cart/crud/create')
      console.log(createCart)

    }

  }

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

        <div className="cart_resume">
          <span className="value_cart">Valor Total: {cartPrice} R$</span>
          <span className="cart_qtd_items">Total de itens: {cartQtdItems}</span>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); sendCartClient(); }}
        >
          <div className="add_user_cart">
            <div className="form-group">
              <label htmlFor="username">Nome Cliente:</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                autoComplete='off'
                defaultValue={username}
                required
                placeholder='Joanna Dark'
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className='errors errors-username'></span>
            </div>
            <div className='form-group'>
              <label htmlFor="username">Instagram:</label>
              <input 
                type="text" 
                name="instagram"
                id="instagram" 
                autoComplete='off'
                defaultValue={instagram}
                placeholder='Joanna_Dark_io'
                required
                onChange={ (e)=> setInstagram(e.target.value)}
              />
              <span className='errors errors-instagram'></span>
            </div>
            <div className="submit_cart_client">
              <button>Registrar Carrinho</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WindowCart