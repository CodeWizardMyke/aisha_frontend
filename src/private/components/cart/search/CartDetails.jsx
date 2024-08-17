import React, { useEffect, useState } from 'react'

import './CartDetails.css'
import aishaFetch from '../../../axios/config'
import ProductTable from './ProductTable'

function CartDetails({data, setSearchNav, setClientSelect}) {
  const [products, setProducts] = useState([])
  const [ showPopUp, setShowPopUp ] = useState(false)
  const [ removeConfirm, setRemoveConfirm ] = useState(false)

  useEffect(()=>{
    if(removeConfirm){
      if(removeConfirm){
        aishaFetch.delete('/cart/crud/destroy',{headers:{cart_id:data.cart_id}})
        .then( response  => {
          setShowPopUp(false)
          setClientSelect([])
          setSearchNav({pClient:true,pCart:false,pShowCart:false})
        })
        .catch(err => console.log(err))
        setShowPopUp(false)
      }
    }else{
      aishaFetch.get('/cart_item/crud/read',{headers:{ cart_id: data.cart_id }})
      .then( response => {
        setProducts(response.data.rows )
      })
      .catch( err => console.log(err))
    }

  },[data,removeConfirm,setSearchNav, setClientSelect])


  return (
    <section className='SearchContent'>
      {
        showPopUp && (
          <div className="popup_delete">
            <span> Tem certeza que deseja deletar o carrinho?</span>
            <div>
              <button 
                className='remove_element'
                onClick={()=> setRemoveConfirm(true)}
              >SIM</button>
              <button 
                className='close__popup_delete'
                onClick={()=> setShowPopUp(false)}
              >NÃO</button>
            </div>
          </div>
        )
      }
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
              {
                products.length > 0 && (
                  products.map((item,index) => (
                    <ProductTable 
                      key={item.cart_item_id +"cart_item" + index}
                      product={item.product}
                      qtd_products={item.qtd_products}
                    />
                  ))
                )
              }
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
            <button onClick={()=> setShowPopUp(true) } >CANCELAR CARRINHO</button>
            <button>GERAR LINK DO CARRINHO</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartDetails