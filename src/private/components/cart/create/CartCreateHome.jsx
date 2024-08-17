import React, { useEffect, useState } from 'react'
import SearchProducts from './SearchProducts'

import '../../css/DefaultComponents.css'
import ShowMoreProduct from './ShowMoreProduct';

function CartCreateHome() {
  const [ navPage, setNavPage ] = useState('')
  const [ products, setProducts ] = useState([]);
  const [ prod, setProd ] = useState(null);

  return (
    <section className='wm-content'>
       <nav className='wm-nav'>
        <ul>
          <li>
            <button>Buscar Produtos</button>
          </li>
          <li>
            <button>Mostrar Carrinho</button>
          </li>
          <li>
            <button>Buscar Cliente</button>
          </li>
        </ul>
      </nav>
      { navPage === '' && < SearchProducts products={products} setProducts={setProducts} setNavPage={setNavPage} setProd={setProd} /> }
      { navPage === 'sp' && < ShowMoreProduct prod={prod} /> }
    </section>
  )
}

export default CartCreateHome