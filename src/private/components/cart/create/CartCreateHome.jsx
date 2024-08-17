import React, { useState } from 'react'
import SearchProducts from './SearchProducts'

import '../../css/DefaultComponents.css'

function CartCreateHome() {
  const [products, setProducts] = useState([]);

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
      <SearchProducts products={products}  setProducts={setProducts} />
    </section>
  )
}

export default CartCreateHome