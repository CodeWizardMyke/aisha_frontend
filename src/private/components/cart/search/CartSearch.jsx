import React, { useEffect, useState } from 'react'

import './CartSearch.css'
import ContentClientSearch from './ContentClientSearch';
import ContentCartSearch from './ContentCartSearch';
import CartDetails from './CartDetails';

function CartSearch() {
  const [ clientSearch, setClientSearch ] = useState([]);
  const [ clientSelect, setClientSelect ] = useState(null)

  const [ searchCartClient, setSearchCartClient ] = useState([]);
  const [ cartSelect, setCartSelect ] = useState(null)

  console.log(cartSelect)

  const [ searchNav, setSearchNav ] = useState({pClient:true,pCart:false,pShowCart:false});

  function toggleNavigate(numberPage){
    if(numberPage === 1){
      setSearchNav({pClient:true,pCart:false,pShowCart:false})
    }
    if(clientSelect && numberPage === 2 ){
      setSearchNav({pClient:false,pCart:true,pShowCart:false})
    }
    if(cartSelect && numberPage === 3){
      setSearchNav({pClient:false,pCart:false,pShowCart:true})
    }
  };

  useEffect(()=> {
    setSearchCartClient([])
  },[clientSelect])

  return (
    <div className='SearchContainer'>
      <nav className='SearchNavigate'>
        <ul>
          <li>
            <button onClick={()=> toggleNavigate(1)} className={searchNav.pClient ? 'navigate__active' : ''} >Buscar Cliente</button>
          </li>
          <li>
            <button onClick={()=> toggleNavigate(2)} className={searchNav.pCart ? 'navigate__active' : ''} >Selecionar Carrinho</button>
          </li>
          <li>
            <button onClick={()=> toggleNavigate(3)} className={searchNav.pShowCart ? 'navigate__active' : ''} >Detalhes do carrinho</button>
          </li>
        </ul>
      </nav>
     { searchNav.pClient && <ContentClientSearch clientSearch={clientSearch} setClientSearch={setClientSearch} setClientSelect={setClientSelect} setSearchNav={setSearchNav} /> }
     { searchNav.pCart && <ContentCartSearch searchCartClient={searchCartClient} setSearchCartClient={setSearchCartClient} setCartSelect={setCartSelect}  clientSelect={clientSelect} setSearchNav={setSearchNav}/> }
     { searchNav.pShowCart && <CartDetails cartSelect={cartSelect} /> }
    </div>
  )
}

export default CartSearch