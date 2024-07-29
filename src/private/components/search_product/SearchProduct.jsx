import React, { useEffect, useState } from 'react'

import './SearchProduct.css'
import aishaFetch from '../../axios/config';
import Loading from '../loading/Loading';
import ProductItem from './ProductItem';

function SearchProduct() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [count,setCount] = useState(0)
  let size = 10;

  useEffect(() => {
    aishaFetch.get(`/product/${ query === '' ? 'crud/read' : 'search/title'}`,{
      headers: {'Content-Type': 'application/json',size: size, page: page, title: query}
    })
    .then( response => { 
      setProducts(response.data.rows);
      setCount(response.data.count);
      setLoading(false);
    })
    .catch( error => console.log(error))
  }, [page, size, query]);

  function paginatePrev() { if (page > 1) {setPage(page - 1);}}
  function paginateNext() { if (page < count / size) {setPage(page + 1);}}

  return (
    <div>
      <div className="SearchProduct">
        <h2>Buscar produtos</h2>
        <div className='search_item_inputs'>
        <form  onSubmit={(e) => {e.preventDefault()}} >
            <input
              type="text"
              placeholder="Nome do produto"
              onChange={(e) => setQuery(e.target.value)}
              className='searhProduct_input'
            />
            <button>Pesquisar</button>
          </form>
        </div>
      </div>
      <div className="content_product">
        <h2>lista de produtos</h2>
        {loading ? <Loading/> : ''} 
        <ul className='product__list'>
        {products.length > 0 ? (
            products.map((product) => (
              <li key={product.product_id} >
                <ProductItem product={product} />
              </li>
            ))
          ) : ''
        }
        </ul>
      </div>
      <div className='pagination'>
        <button type="button" className='btn_prev' onClick={paginatePrev}>Anterior</button>
        <button type="button" className='btn_next' onClick={paginateNext}>Próximo</button>
      </div>
    </div>
  )
}

export default SearchProduct