import React, { useEffect, useState } from 'react'

import './CartDetails.css'
import aishaFetch from '../../../axios/config'

function CartDetails({data}) {
  const [products, setProducts] = useState([])

  function fetchProductsInCart (){
    aishaFetch.get('/cart_item/crud/read',{headers:{ cart_id: data.cart_id }})
    .then( response => console.log(response.data.rows))
    .catch( err => console.log(err))
  }

  useEffect(()=>{
    fetchProductsInCart()
  },[data])

  return (
    <section className='SearchContent'>
      <h3>Carrinho ID: {data.cart_id}</h3>
      <div className="content_cart_select">
        <div>
          <div className="infoValueBasic">
            <div className="info-left">
              <span>VALOR TOTAL DO PEDIDO: {data.amount}</span>
              <span>QUANTIDADE DE PRODUTOS: {data.qtd_products}</span>
              <span>PESO TOTAL DOS PRODUTOS: {data.qtd_products}</span>
              <span>PESO COM EMBALAGEM: {data.qtd_products}</span>
            </div>
            <div className="info-rigth">
              <span> :EMPRESA DE ENTREGA</span>
              <span> :VALOR TOTAL DA ENTREGA</span>
            </div>
          </div>
          <table className="items_in_cart">
            <thead>
              <tr>
                <th>ID</th>
                <th>TITULO DO PRODUTO</th>
                <th>PREÇO</th>
                <th>CATEGORIA</th>
                <th>QTD_PRODUTOS</th>
                <th>VALOR FINAL DO PEDIDO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>loção hidratante</td>
                <td>100.00</td>
                <td>creme</td>
                <td>2</td>
                <td>200.00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>loção hidratante</td>
                <td>100.00</td>
                <td>creme</td>
                <td>2</td>
                <td>200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer_content_cart_select">
          <div className="last_inf_cart">
            <span>FORMA DE PAGAMENTO:</span>
            <span>ESTADO DE PAGAMENTO:</span>
            <span>QTD PARCELAS:</span>
          </div>
          <div className="content_buttons_cartDetails">
            <button>CANCELAR CARRINHO</button>
            <button>GERAR LINK DO CARRINHO</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartDetails