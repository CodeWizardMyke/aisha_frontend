import React, { useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { FiLoader } from "react-icons/fi";
import { TbCopyPlusFilled } from "react-icons/tb";

import aishaFetch from '../../axios/config';
import Pagination from '../pagination/Pagination'

function GetProducts({products, setProducts, setProd, setNavPage}) {
  const [ query, setQuery ] = useState('');
  const [ load, setLoad ] = useState(false);
  const [ size, setSize ] = useState(10);
  const [ page, setPage] = useState(1);
  const [ count, setCount] = useState(1);

  function handdlerSubmitForm (event){
    event.preventDefault() 
    setLoad(true);

    aishaFetch.get(`/product/${query ? 'search/title' : 'crud/read'}`,{
      headers:{
        page:page,
        size:size,
        title:query
      }
    })
    .then( (response) => {
      setProducts(response.data.rows)
      setCount(response.data.count)
    })
    .catch( error => console.log(error));
    setLoad(false);
  };

  function handdlerShowMoreProd (product) {
    setProd(product);
    setNavPage('showProduct');
  }

  return (
    <div className='wm'>
      {load && <FiLoader className='mw_loading'/>}
      <div className="wmh">
        <form className='w_left d-flex-end' onSubmit={(e) => handdlerSubmitForm(e) }>
          <span className='wmh-prod_select-title'>Campo de Busca</span>
          <label htmlFor="title">Título: </label>
          <input 
            type="text"  name="title" id="title" 
            onChange={ (e) => setQuery(e.target.value) } 
          />
          <button className='wmh-search' ><CiSearch/></button>
        </form>
      </div>
      <div className="wmb">
        <span className='wmb-title'>RESULTADO DA BUSCA.</span>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID:</th>
                <th className='wf-200'>TITULO:</th>
                <th>MARCA:</th>
                <th>PREÇO:</th>
                <th>QTD:</th>
                <th>DETALHES:</th>
              </tr>
            </thead>
            <tbody>
              {
                products.length > 0 && (
                  products.map((data, index) => (
                    <tr key={`ProductSearchCart_${index}`} >
                      <td>{data.product_id}</td>
                      <td>{data.title.slice(0,20)}</td>
                      <td>{data.brand}</td>
                      <td>R$: {data.price}</td>
                      <td>{data.stock}</td>
                      <td>
                        <button
                          onClick={() => handdlerShowMoreProd(data) }
                        >Mostrar <TbCopyPlusFilled/></button>
                      </td>
                    </tr>
                  ))
                )
              }
            </tbody>
          </table>
        </section>
        <Pagination setSize={setSize} setPage={setPage} count={count} size={size}  page={page} setNavPage={setNavPage} setProd={setProd}/>
      </div>
    </div>
  )
}

export default GetProducts