import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { TbCopyPlusFilled } from "react-icons/tb";

import './SearchClient.css'
import Pagination from '../../pagination/Pagination';
import aishaFetch from '../../../axios/config';

function SearchClient({setNavPage,setClientSelect }) {
  const [clients, setClients] = useState([]);
  const [size, setSize]= useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const [ creatClientName, setCreateClientName ] = useState('');
  const [ creatClientInstagram, setCreateClientInstagram ] = useState('');
  const [ searchClientInstagram, setClientInstagram ] = useState('');
  const [ msg_cart, set_msg_cart ] = useState(false);


  function createClient () {
    if(creatClientInstagram && creatClientName){
      aishaFetch.post('/client/crud/create',{clientInstagram:creatClientInstagram,clientName:creatClientName})
      .then(response => {
        set_msg_cart(true);
        console.log(response)
        setTimeout(() => { set_msg_cart(false); }, 3000);
      })
      .catch(error => console.log(error))
    }
  };

  function searchClient () {
    let url = searchClientInstagram ? '/client/search/instagram' : '/client/crud/read'

    aishaFetch.get(url,{headers:{instagram:searchClientInstagram}})
    .then(response => {
      setClients(response.data.rows);
      setCount(response.data.count);
    })
    .catch(error => console.log(error))
  };

  function handdlerClientSelect(data){
    setClientSelect(data);
    setNavPage('create_cart')
  }

  return (
    <div className='wm'>
      <div className="wmh-client">
        <form 
          className="wmh-box w-400"
          onSubmit={(e) => {
            e.preventDefault();
            createClient()
          }}
        >
          <span className="wmh-box-title">Cadastrar novo cliente:</span>
          {msg_cart && <span className='msg-error'>Cliente criado com sucesso!</span>}
          <div>
            <label htmlFor="clientInstagram">Instagram:</label>
            <input 
              type="text"
              name="clientInstagram" 
              id="clientInstagram"
              required
              onChange={(e) => setCreateClientInstagram(e.target.value) }
            />
          </div>
          <div>
            <label htmlFor="clientName">Nome:</label>
            <input 
              type="text" 
              name="clientName" 
              id="clientName" 
              required
              onChange={(e) => setCreateClientName(e.target.value)}
            />
          </div>
          <div>
            <button className='bt bt-add'>cadastrar</button>
          </div>
        </form>
        <form 
          className="wmh-box w-200"
          onSubmit={(e) => {
            e.preventDefault();
            searchClient()
          }}
        >
          <span className="wmh-box-title">Buscar Cliente:</span>
          <div className='wmh-box-search'>
            <label htmlFor="clientInstagram">Instagram:</label>
            <input 
              type="text" 
              name="clientInstagram" 
              id="clientInstagram"
              onChange={(e) => setClientInstagram(e.target.value)}
            />
            <button className='wmh-search'><CiSearch/></button>
          </div>
        </form>
      </div>
      <div className="wmb">
        <span className='wmb-title'>RESULTADO DA BUSCA.</span>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID:</th>
                <th>Nome:</th>
                <th>Instagram:</th>
                <th>Telefone:</th>
                <th>Selecionar</th>
              </tr>
            </thead>
            <tbody>
              {
                clients.length > 0 && (
                  clients.map((data, index) => (
                    <tr key={`ProductSearchCart_${index}`} >
                      <td>{data.client_id}</td>
                      <td>{data.clientName.slice(0,20)}</td>
                      <td>{data.clientInstagram.slice(0,20)}</td>
                      <td>{data.telephone}</td>
                      <td>
                        <button 
                          onClick={() => {handdlerClientSelect(data)}}
                        >carrinho<TbCopyPlusFilled/></button>
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

export default SearchClient