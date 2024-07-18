import React, { useState } from 'react'

import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import UpdateProduct from './UpdateProduct';
import aishaFetch from '../../axios/config';

function ProductItemList({product,setItemsUpdated, setLoading}) {
  const [showMore, setShowMore] = useState(false)

  const handleShowForm = (product) => {
    setShowMore(true);
  };

  const handleCloseForm = () => {
    setShowMore(false);
  };

  function deleteProduct (){
    setLoading(true);
    aishaFetch.delete('/product/crud/destroy', {headers:{product_id: product.product_id}} )
    .then(response => { 
      setItemsUpdated(true)
      setLoading(false)
      console.log(response)
    })
    .catch(error => {
      setLoading(false)
      console.log(error) 
    })
  }

  return (
    <>
      <li>
        <div className="item_info">
          <div className='item_title_id'>
            <span>{`ID: ${product.product_id} ,`}</span>
            <h3>{`Titulo: ${product.title}`}</h3>
          </div>
        <p>{`Descrição: ${product.discribe.slice(0, 50) + '...'}`}</p>
        </div>
          <div className="item_actions">
          <button type="button" className='bt_delete' onClick={deleteProduct}>Excluir <RiDeleteBin5Line /> </button>
          <button type="button" className='bt_edit'  onClick={ handleShowForm } >Editar <CiEdit /> </button>
        </div>
      </li>
      { showMore && <UpdateProduct product={product} setLoading={setLoading}  onClose={handleCloseForm} setItemsUpdated={setItemsUpdated} />}
    </>
    
  )
}

export default ProductItemList
