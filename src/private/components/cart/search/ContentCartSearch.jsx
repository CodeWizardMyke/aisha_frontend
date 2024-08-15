import React, { useState } from 'react'
import { MdOutlineContentPasteSearch } from "react-icons/md";

import Loading from '../../loading/Loading';
import './ContentSearch.css'
import aishaFetch from '../../../axios/config';
import TableItemCart from './TableItemCart';

function ContentCartSearch({searchCartClient,setSearchCartClient, setCartSelect, clientSelect,setSearchNav }) {
  const [load, setLoad] = useState(false)
  const [payState, setPayState] = useState('pendding')
  
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  
  let size = 10;

  function paginatePrev() { if (page > 1) {setPage(page - 1);}}
  function paginateNext() { if (page < count / size) {setPage(page + 1);}}

  function fetchClients (){
    setLoad(true)
    let headers ={
      page:page,
      size:size,
      client_id: clientSelect.client_id,
      state: payState
    }

    aishaFetch.get('/cart/search/client', { headers : headers })
    .then( response => {
      setCount(response.data.count)
      setSearchCartClient(response.data.rows)
    })
    .catch( err => console.log(err));
    setLoad(false); 
  }

  return (
    <section className='SearchContent'>
      <div className="sf_content">
        <span className='sf_span'>Cliente: {clientSelect.clientName} | instagram: {clientSelect.clientInstagram}</span>
        <form className="sf_group" onSubmit={(e)=> {e.preventDefault(); fetchClients()}}>
          <label htmlFor="state">Estado:</label>
          <select name="state" id="state" onChange={(e) => setPayState(e.target.value)}>
            <option value="pendding">PAGAMENTO PENDENTE</option>
            <option value="appproved">PAGAMENTO APROVADO</option>
          </select>
          <button><MdOutlineContentPasteSearch/></button>
        </form>
      </div>
      <div className="table_content">
        { load && <Loading/> }
        <table className='dct_response'>
          <thead>
            <tr>
              <th>Id:</th>
              <th>Qtd Item</th>
              <th>Preço:</th>
              <th>Pagamento:</th>
              <th>Entrega:</th>
            </tr>
          </thead>
          <tbody>
            {searchCartClient.length > 0 && (
              searchCartClient.map((element,index) => 
              <TableItemCart
                key={element.cart_id+'-'+index} 
                data={element}
                setCartSelect={setCartSelect}
                setSearchNav={setSearchNav}
              />)
            )}
          </tbody>
        </table>
      </div>
      <div className='pagination'>
        <button type="button" className='btn_prev' onClick={paginatePrev}>Anterior</button>
        <button type="button" className='btn_next' onClick={paginateNext}>Próximo</button>
      </div>
    </section>
  )
}

export default ContentCartSearch