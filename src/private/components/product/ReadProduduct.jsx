import React, { useEffect, useState } from 'react';
import './ReadProduct.css';

import Loading from '../loading/Loading';
import ProductItemList from './ProductItemList';
import fetchProducts from '../../utils/fetchProducts';

function ReadProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [query, setQuery] = useState('');
  let size = 10;

  useEffect(() => {
    fetchProducts(page, size, query)
      .then( response => {
        setProducts(response.data.rows);
        setCount(response.data.count);
        setLoading(false);
      })
      .catch( error => console.log(error));
  }, [page, size, query]);

  function paginatePrev() { if (page > 1) {setPage(page - 1);}}
  function paginateNext() { if (page < count / size) {setPage(page + 1);}}

  return (
    <div className='content_crud'>
      <div className="search_item">
        <h2>Pesquisar Produtos</h2>
        <div className='search_item_inputs'>
          <form onSubmit={(e) => {e.preventDefault()}}>
            <input
              type="text"
              placeholder="Pesquisar produto"
              onChange={(e) => setQuery(e.target.value)}
              className='searhProduct_input'
            />
            <button>Pesquisar</button>
          </form>
        </div>
      </div>
      <div className="item_list">
        <ul>
          {loading ? (
            <Loading />
          ) : (
            products.map((product) => (
              <ProductItemList key={product.product_id} product={product} />
            ))
          )}
        </ul>
        <div>
          <div className='pagination'>
            <button type="button" className='btn_prev' onClick={paginatePrev}>Anterior</button>
            <button type="button" className='btn_next' onClick={paginateNext}>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadProduct;
