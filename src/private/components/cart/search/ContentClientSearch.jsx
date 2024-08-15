import React, { useState } from 'react'
import { MdOutlineContentPasteSearch } from "react-icons/md";

import Loading from '../../loading/Loading';
import './ContentSearch.css'
import aishaFetch from '../../../axios/config';
import ItemTable from './TableClient';


function ContentCartSearch({clientSearch,setClientSearch, setClientSelect, setSearchNav }) {
  const [load, setLoad] = useState(false)
  const [clientInstagram, setClientInstagram] = useState(null)
  
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  
  let size = 10;

  function paginatePrev() { if (page > 1) {setPage(page - 1);}}
  function paginateNext() { if (page < count / size) {setPage(page + 1);}}

  function fetchClients (){
    setLoad(true)
    let url = `/client/search/${clientInstagram ? 'instagram' : ''}`
    let headers ={
      page:page,
      size:size,
      instagram:clientInstagram,
    }

    aishaFetch.get(url, {headers: headers})
    .then( response => {
      setCount(response.data.count)
      setClientSearch(response.data.rows)
      console.log(clientSearch)
    })
    .catch( err => console.log(err));
    setLoad(false); 
  }

  return (
    <section className='SearchContent'>
      <div className="sf_content">
        <span className='sf_span'>Campo De Busca.</span>
        <form className="sf_group" onSubmit={(e)=> {e.preventDefault(); fetchClients()}}>
          <label htmlFor="clientInstagram">Instagram:</label>
          <input type="text" name="clientInstagram" id="clientInstagram" onChange={e => setClientInstagram(e.target.value)} />
          <button><MdOutlineContentPasteSearch/></button>
        </form>
      </div>
      <div className="table_content">
        { load && <Loading/> }
        <table className='dct_response'>
          <thead>
            <tr>
              <th>Id:</th>
              <th>Nome completo:</th>
              <th>Instagram:</th>
              <th>Telefone:</th>
              <th>CPF:</th>
            </tr>
          </thead>
          <tbody>
            {clientSearch.length > 0 && (
              clientSearch.map((element,index) => 
              <ItemTable
                key={element.client_id+'-'+index} 
                data={element}
                setClientSelect={setClientSelect}
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