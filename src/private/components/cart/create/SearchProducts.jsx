import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FiLoader } from "react-icons/fi";
import { TbCopyPlusFilled } from "react-icons/tb";
import aishaFetch from '../../../axios/config';
import Pagination from '../../pagination/Pagination';

function SearchProducts({products, setProducts}) {
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
      console.log(response)
      setProducts(response.data.rows)
      setCount(response.data.count)
    })
    .catch( error => console.log(error));
    setLoad(false);
  };

  return (
    <div className='wm'>
      {load && <FiLoader className='mw_loading'/>}
      <div className="wmh">
        <span className='wmh-title'>FERRAMENTAS DE BUSCA.</span>
        <form className='w_left' onSubmit={(e) => handdlerSubmitForm(e) }>
          <label htmlFor="title">Título: </label>
          <input type="text" name="title" id="title" onChange={ (e) => setQuery(e.target.value) }/>
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
                <th>PESO:</th>
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
                      <td>{data.NET_HEIGHT}</td>
                      <td>{data.stock}</td>
                      <td>
                        <button>Mostrar <TbCopyPlusFilled/></button>
                      </td>
                    </tr>
                  ))
                )
              }
            </tbody>
          </table>
        </section>
        <Pagination setSize={setSize} setPage={setPage} count={count} size={size}  page={page}/>
      </div>
    </div>
  )
}

export default SearchProducts