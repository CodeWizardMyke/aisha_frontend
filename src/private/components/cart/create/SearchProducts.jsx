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
  const [msg_cart, setMsg_cart] = useState(false)

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
    if(productSelect){
      createCartHanddler(products, prodCart, productSelect, qtdSelect, setProdCart,setProducts)
    }else{
      setMsg_cart(true)
      setTimeout(()=>{
        setMsg_cart(false)
      },3000)
    }
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
          {msg_cart && <span className='msg-error'>Faça uma busca por um produto, selecione, depois adicione ao carrinho!</span>}
          <span className='wmh-prod_select-title'>ID Produto: { productSelect ? productSelect.product_id : 'não selecionado'}</span>
          <label htmlFor="qtd_products">Quantidade:</label>
          <input 
            type="number"
            id="qtd_products" 
            className='w-75' 
            min={1}
            required
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
        <form className='w_left wmh-prod_select' onSubmit={(e) => handdlerSubmitForm(e) }>
          <span className='wmh-prod_select-title'>Campo de Busca</span>
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
        <Pagination setSize={setSize} setPage={setPage} count={count} size={size}  page={page} setNavPage={setNavPage} setProd={setProd}/>
      </div>
    </div>
  )
}

export default SearchProducts