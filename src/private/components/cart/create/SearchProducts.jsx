import React, { useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { FiLoader } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa6";
import { TbCopyPlusFilled } from "react-icons/tb";

import { GrCheckboxSelected } from "react-icons/gr";

import aishaFetch from '../../../axios/config';
import Pagination from '../../pagination/Pagination';
import createCartHanddler from '../../../functions/createCartHanddler';

function SearchProducts({products, setProducts, setProd, setNavPage, prodCart, setProdCart}) {
  const [ query, setQuery ] = useState('');
  const [ load, setLoad ] = useState(false);
  const [ size, setSize ] = useState(10);
  const [ page, setPage] = useState(1);
  const [ count, setCount] = useState(1);

  const [qtdSelect, setQtdSelect] = useState(1);
  const [productSelect, setProductSelect] = useState(null)

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
    setNavPage('sp');
  }

  function handdlerSetProdCart (){
    const {cart} = createCartHanddler( products, setProducts ,productSelect, qtdSelect);
    setProdCart(cart);
    console.log(cart)
  }

  return (
    <div className='wm'>
      {load && <FiLoader className='mw_loading'/>}
      <div className="wmh">
        <form 
          className='wmh-prod_select'
          onSubmit={(e) =>{
            e.preventDefault();
            handdlerSetProdCart(e)
          }}
        >
          <span className='wmh-prod_select-title'>ID Produto: { productSelect ? productSelect.product_id : 'não selecionado'}</span>
          <label htmlFor="qtd_products">Quantidade:</label>
          <input 
            type="number"
            id="qtd_products" 
            className='w-75' 
            min={1} 
            max={ productSelect ? productSelect.stock : 1 }
            onChange={(e) => setQtdSelect(e.target.value)}
            onInvalid={(e) => {
              if (e.target.validity.rangeUnderflow) {
                e.target.setCustomValidity('Quantidade mínima de produtos não atendida');
              } else if (e.target.validity.rangeOverflow) {
                e.target.setCustomValidity('Não temos essa quantidade de produtos em stock');
              } else {
                e.target.setCustomValidity('');
              }
            }}
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <button type='submit'>Adicionar<FaCartPlus/></button>
        </form>
        <form className='w_left' onSubmit={(e) => handdlerSubmitForm(e) }>
          <label htmlFor="title">Título: </label>
          <input 
            type="text" 
            name="title" 
            id="title" 
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
                <th>ESCOLHER</th>
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
                          onClick={() => setProductSelect(data) }
                        >Selecionar <GrCheckboxSelected/>
                        </button>
                      </td>
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
        <Pagination setSize={setSize} setPage={setPage} count={count} size={size}  page={page}/>
      </div>
    </div>
  )
}

export default SearchProducts