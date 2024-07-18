import React, { useState } from 'react'

import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import UpdateProduct from './UpdateProduct';

function ProductItemList({product,setItemsUpdated}) {
  const [showMore, setShowMore] = useState(false)

  const handleShowForm = (product) => {
    setShowMore(true);
  };

  const handleCloseForm = () => {
    setShowMore(false);
  };

  return (
    <>
      <li onClick={ handleShowForm }>
        <div className="item_info">
          <div className='item_title_id'>
            <span>{`ID: ${product.product_id} ,`}</span>
            <h3>{`Titulo: ${product.title}`}</h3>
          </div>
        <p>{`Descrição: ${product.discribe.slice(0, 50) + '...'}`}</p>
        </div>
          <div className="item_actions">
          <button type="button" className='bt_delete'>Excluir <RiDeleteBin5Line /> </button>
          <button type="button" className='bt_edit'>Editar <CiEdit /> </button>
        </div>
      </li>
      { showMore && <UpdateProduct product={product} onClose={handleCloseForm} setItemsUpdated={setItemsUpdated} />}
    </>
    
  )
}

export default ProductItemList
