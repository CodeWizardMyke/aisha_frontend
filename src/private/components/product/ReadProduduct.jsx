import React, { useEffect, useState } from 'react';
import './ReadProduct.css';

import aishaFetch from '../../axios/config';
import Loading from '../loading/Loading';
import ProductItemList from './ProductItemList';

const fetchProducts = async (page, size, setProducts, setCount, setLoading) => {
  try {
    const response = await aishaFetch.get('/product/crud/read', {
      headers: { size: size, page: page }
    });

    setProducts(response.data.rows);
    setCount(response.data.count);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

const searchProduct = async (e, page, size, query, setProducts, setCount, setLoading) => {
  e.preventDefault();
  try {
    const response = await aishaFetch.get('/product/search/title', {
      headers: { size: size, page: page, title: query }
    });
    console.log(response);

    setProducts(response.data.rows);
    setCount(response.data.count);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

function ReadProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [query, setQuery] = useState('');
  let size = 2;

  useEffect(() => {
    fetchProducts(page, size, setProducts, setCount, setLoading);
  }, [page, size]);

  function paginatePrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function paginateNext() {
    if (page < count / size) {
      setProducts([])
      setPage(page + 1);
    }
  }

  return (
    <div className='content_crud'>
      <div className="search_item">
        <h2>Pesquisar Produtos</h2>
        <div className='search_item_inputs'>
          <form onSubmit={(e) => searchProduct(e, page, size, query, setProducts, setCount, setLoading)}>
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
