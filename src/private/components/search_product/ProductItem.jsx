import React, { useState } from 'react'

function ProductItem({product,setCartItems,cartItems}) {
  const [qtd,setQtd] = useState(1)

  let createItemCart = {
    product_id:product.product_id,
    title:product.title,
    brand:product.brand,
    category:product.category,
    price:product.price,
    stock:product.stock,
    qtd_product: qtd
  }

  function handdlerAddCart (){
      setCartItems([...cartItems, createItemCart])
  }

  return (
    <div className='product__item'>
      <span className="title">Titulo: {product.title}</span>
      <div className="product__info">
        <span>ID:{product.product_id}</span>
        <span className='price'>Preço: {product.price} R$</span>
        <span>Estoque: {product.stock}</span>
      </div>
      <div className='add_cart_bx'>
        <div>
          <label htmlFor="qtd">Qtd </label>
          <input 
            type="number" 
            id='qtd' name="qtd" 
            defaultValue={1}
            className='qtd' min={1} 
            max={product.stock}
            onChange={(e)=>{setQtd(e.target.value)}}
          />
        </div>
        <button
          onClick={ ()=>{ handdlerAddCart ()}}
        >adicionar ao carrinho</button>
      </div>
    </div>
  )
}

export default ProductItem