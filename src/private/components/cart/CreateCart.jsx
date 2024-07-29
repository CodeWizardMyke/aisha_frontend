import React, { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import './CreateCart.css'


import Loading from '../loading/Loading';
import SearchProduct from '../search_product/SearchProduct';


function CreateCart() {
  const [loading, setLoading] = useState(false)


  return (
    <div className='box-p10'>
      {loading ? <Loading/> : ''}
      <div className='df-left'>
        <button type='button' className='showCartItems'> Mostrar itens <FaCartPlus/></button>
      </div>
      <div>
       <SearchProduct/>
      </div>
    </div>
  )
}

export default CreateCart
