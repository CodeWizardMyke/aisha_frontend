import React, { useState } from 'react';
import GetProducts from './GetProducts';
import ShowProduct from './ShowProduct';

function ReadProduct() {
  const [ navPage, setNavPage ] = useState('')
  const [ products, setProducts ] = useState([]);
  const [ prodShow, setProdShow ] = useState(null);

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
              onClick={() => {
                if(prodShow){
                  setNavPage('showProduct')
                }
              }}
              className={navPage === 'showProduct' ? 'nav-active' : ''}
            >Mostrar Produto</button>
          </li>
        </ul>
      </nav>
      {
        navPage === '' && (
          < GetProducts
              products={products} 
              setProducts={setProducts} 
              setNavPage={setNavPage}
              setProd={setProdShow}
          />
        )
      }
      {
        navPage === "showProduct"  &&  (
          < ShowProduct 
              data={prodShow} 
              setNavPage={setNavPage} 
          />
        )
      }
    </section>
  );
}

export default ReadProduct;
