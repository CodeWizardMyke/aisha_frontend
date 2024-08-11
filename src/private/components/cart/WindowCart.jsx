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
  const [urlCart, setUrlCart] = useState('');
  const [copied, setCopied] = useState(false);
  
  useEffect(()=>{
    let cart_price = cartItems.reduce((acc, item) => (item.price * Number(item.qtd_products)) + acc,0);
    let cart_qtd_items = cartItems.reduce((acc, item) => Number(item.qtd_products) + acc,0);

    setCartQtdItems(cart_qtd_items);
    setCartPrice(cart_price)
  },[cartItems])
  
  async function sendCartClient(){
    try {
      let createCart = {
        clientName:username,
        clientInstagram:instagram,
        items:cartItems
      }
      const response = await aishaFetch.post('/cart/crud/create', createCart)
      
      handdlerSucessRequest(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handdlerSucessRequest = (data) => {
    const currentURL = window.location.href;
    const urlBase =  currentURL.split('/manager')[0];

    setUrlCart(`${urlBase}/client/cart/${data.clientInstagram}`)
  }

  const handdleCopy = () => {
    navigator.clipboard.writeText(urlCart)
      .then( () => {
        setCopied(true);
        setTimeout(() => setCopied(false) ,2000)
      });
  };

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
        <div className='window_footer'>
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
          
          <div className='msg_return'>
            <div className='form-group'>
              <label htmlFor="url_client">Link do cliente para acessar o carrinho:</label>
              <div className='add__position_relative'>
                <input type="text" name="url_client" id='url_client' value={urlCart} readOnly/>
                <span className='copy' onClick={handdleCopy}>copiar</span>
                { copied && <span className='msg_copy' >Copiado!</span>  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WindowCart