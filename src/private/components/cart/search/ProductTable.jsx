import React from 'react'

function ProductTable({product, qtd_products}) {
  return (
    <tr>
      <td>{product.product_id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td>{qtd_products}</td>
      <td>{ Number(product.price) * qtd_products}</td>
  </tr>
  )
}

export default ProductTable