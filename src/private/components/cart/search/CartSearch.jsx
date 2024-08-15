import React, { useEffect, useState } from 'react'

import './CartSearch.css'
import ContentCartSearch from './ContentCartSearch';

function CartSearch() {
  const [ clientSearch, setClientSearch ] = useState([]);
  const [ clientSelect, setClientSelect ] = useState(null)

  const [ cartSearch, setCartSearch ] = useState([]);
  const [ cartSelect, setCartSelect ] = useState(null)

  const [ searchNav, setSearchNav ] = useState({pClient:true,pCart:false,pShorCart:false});

  function toggleNavigate(numberPage){
    if(numberPage === 1){
      setSearchNav({pClient:true,pCart:false,pShorCart:false})
    }
    if(clientSelect && numberPage === 2 ){
      setSearchNav({pClient:false,pCart:true,pShorCart:false})
    }
    if(cartSelect && numberPage === 3){
      setSearchNav({pClient:false,pCart:false,pShorCart:true})
    }
  };


  useEffect(()=> {
    console.log(clientSelect)
  },[clientSelect])

  return (
    <div className='SearchContainer'>
      <nav className='SearchNavigate'>
        <ul>
          <li>
            <button onClick={ ()=> toggleNavigate(1)  }>Buscar Cliente</button>
          </li>
          <li>
            <button onClick={ ()=> toggleNavigate(2) }>Selecionar Carrinho</button>
          </li>
          <li>
            <button onClick={ ()=> toggleNavigate(3) }>Detalhes do carrinho</button>
          </li>
        </ul>
      </nav>
     { searchNav.pClient && <ContentCartSearch clientSearch={clientSearch} setClientSearch={setClientSearch} setClientSelect={setClientSelect} /> }
    </div>
  )
}

export default CartSearch