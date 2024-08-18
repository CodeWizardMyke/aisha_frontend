import React from 'react'
import { TbCopyPlusFilled } from "react-icons/tb";

function CartShowProducts({prodCart,setProdCart,products,setProducts, setProd, setNavPage}) {

  function handdlerShowMoreProd (item) {
    setProd(item);
    setNavPage('sp');
  }

  return (
    <div className="wm">
      <div className="wmh"></div>
      <div className="wmb">
        <span className="wmb-title">PRODUTOS NO CARRINHO:</span>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID:</th>
                <th className='wf-200'>TITULO:</th>
                <th>MARCA:</th>
                <th>PREÇO:</th>
                <th>UND:</th>
                <th>CATEGORIA</th>
                <th>DETALHES:</th>
              </tr>
            </thead>
            <tbody>
              {
                prodCart.length > 0 && (
                  prodCart.map((data, index) => (
                    <tr key={`ProductSearchCart_${index}`} >
                      <td>{data.product_id}</td>
                      <td>{data.title.slice(0,20)}</td>
                      <td>{data.brand}</td>
                      <td>R$: {data.price}</td>
                      <td>{data.qtd_products}</td>
                      <td>{data.category}</td>
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
      </div>
    </div>
  )
}

export default CartShowProducts