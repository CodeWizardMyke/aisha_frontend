import React from 'react'

function ProductItem({product}) {
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
          <input type="number" id='qtd' name="qtd" defaultValue={1} className='qtd' min={1} />
        </div>
        <button>adicionar ao carrinho</button>
      </div>
    </div>
  )
}

export default ProductItem