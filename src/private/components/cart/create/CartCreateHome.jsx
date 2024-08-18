import React, { useState } from 'react'
import SearchProducts from './SearchProducts'

import '../../css/DefaultComponents.css'
import ShowMoreProduct from './ShowMoreProduct';

function CartCreateHome() {
  const [ navPage, setNavPage ] = useState('')
  const [ products, setProducts ] = useState([]);
  const [ prodCart, setProdCart ] = useState([]);
  const [ prod, setProd ] = useState(null);

  return (
    <section className='wm-content'>
       <nav className='wm-nav'>
        <ul>
          <li>
            <button 
              onClick={() => setNavPage('') }
              className={navPage === '' ? 'nav-active' : ''}
              >Buscar Produtos</button>
          </li>
          <li>
            <button
              onClick={() => setNavPage('sc')}
              className={navPage === 'sc' ? 'nav-active' : ''}
            >Mostrar Carrinho</button>
          </li>
          <li>
            <button
             onClick={() => setNavPage('fc')}
             className={navPage === 'fc' ? 'nav-active' : ''}
            >Buscar Cliente</button>
          </li>
        </ul>
      </nav>
      { navPage === '' && (
        < SearchProducts 
          products={products} 
          setProducts={setProducts} 
          setNavPage={setNavPage} 
          setProd={setProd}
          prodCart={prodCart}
          setProdCart={setProdCart}
        /> 
      )}
      { navPage === 'sp' && < ShowMoreProduct prod={prod}  setNavPage={setNavPage} /> }
    </section>
  )
}

export default CartCreateHome