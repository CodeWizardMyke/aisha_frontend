import React, { useEffect, useState } from 'react';

import './ReadCart.css'
import Loading from '../loading/Loading';
import aishaFetch from '../../axios/config';

function ReadCart() {
  const [clientInstagram, setClientInstagram] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  
  let size = 10;
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  function paginatePrev() { if (page > 1) {setPage(page - 1);}}
  function paginateNext() { if (page < count / size) {setPage(page + 1);}}
  
  useEffect(()=>{
    getClients()
    console.log(data)
  },[page])

  function getClients (){
    aishaFetch.get(`/client/search/${clientInstagram ? 'instagram' : ''}`,{
      headers:{
        page:page,size:size,
        instagram:clientInstagram
      }
    })
    .then( (response) => {
      console.log(response)
      setData(response.data.rows)
      setCount(response.data.count)
    })
    .catch( error => console.log(error))
  }

  return (
    <div className='content_crud'>
      <div >
        <div className='form-search'>
          <span className="title-form">Buscar Clientes</span>
          <form onSubmit={(e) => {e.preventDefault();  getClients(); console.log(data) }} >
            <div>
              <input
                type="text"
                placeholder="Digite o instagram"
                onChange={(e) => setClientInstagram(e.target.value)}
              />
            </div>
            <button>Pesquisar</button>
          </form>
        </div>
      </div>
      <div className="item_list">
        {loading ? <Loading/> : ''} 
        <ul>  
          {data.length >0 ?  (
            data.map( (element, index) => (
              <li key={index+'li_data_client'}>
                <span>
                  id: {element.client_id}
                </span>
                <span>:
                  name: {element.clientName}
                </span>
                <span>
                  Instagram: {element.clientInstagram}
                </span>
              </li>
            ))
          ) : ''}
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

export default ReadCart;
