import React, { useEffect, useState } from 'react';

import Loading from '../loading/Loading';
import aishaFetch from '../../axios/config';
import ItemListEmployee from './ItemListEmployee';
import './ReadEmployee.css'

function ReadEmployee() {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [query, setQuery] = useState('');
  const [itemUpdated, setItemsUpdated] = useState(false)

  let size = 10;

  useEffect(() => {
      aishaFetch.get(`/employee/${ query === '' ? 'crud/read' : 'search/email'}`,{
        headers: {'Content-Type': 'application/json',size: size, page: page, email: query}
      })
      .then( response => { 
        setEmployee(response.data.rows);
        setCount(response.data.count);
        console.log(response)
        setLoading(false);
      })
      .catch( error => console.log(error))
  }, [page, size, query, itemUpdated]);

  function paginatePrev() { if (page > 1) {setPage(page - 1);}}
  function paginateNext() { if (page < count / size) {setPage(page + 1);}}

  return (
    <div className='content_crud'>
      <div className="search_item">
        <h2>Pesquisar Funcionário</h2>
        <div className='search_item_inputs'>
          <form onSubmit={(e) => {e.preventDefault()}}>
            <input
              type="text"
              placeholder="Buscar por email"
              onChange={(e) => setQuery(e.target.value)}
              className='searhProduct_input'
            />
            <button>Pesquisar</button>
          </form>
        </div>
      </div>
      <div className="item_list">
        {loading ? <Loading/> : ''} 
        <ul>
          {employee.length > 0 ? (
            employee.map((element) => (
                <ItemListEmployee key={element.employee_id+element.email} employee={element} setItemsUpdated={setItemsUpdated} setLoading={setLoading} />
            ))
          ) : ""
        }
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

export default ReadEmployee;
