import React, { useEffect, useState } from 'react'
import { TbCopyPlusFilled } from "react-icons/tb";
import { FaTrashAlt } from "react-icons/fa";

function CartShowProducts({prodCart,setProdCart,products,setProducts, setProd, setNavPage}) {
  const [ amountCart, setAmountCart ]= useState(0);
  const [ qtd_items, set_qtd_items ] = useState(0);


  function handdlerShowMoreProd (item) {
    setProd(item);
    setNavPage('sp');
  }

  useEffect(()=>{
    let price = prodCart.reduce((acc, item) => (Number(item.price) * Number(item.qtd_products)) + acc,0);
    let qtd = prodCart.reduce((acc, item) => Number(item.qtd_products) + acc,0);

    setAmountCart(price);
    set_qtd_items(qtd)
  },[prodCart,qtd_items,amountCart])

  function handdlerRemoveItemCart(data, index) {
    if (products.length > 0) {
      const updatedProducts = products.map(product => {
        if (product.product_id === data.product_id) {
          return {
            ...product,
            stock: product.stock + data.qtd_products
          };
        }
        return product;
      });
      setProducts(updatedProducts);
    }
  
    const updatedCart = [...prodCart];
    updatedCart.splice(index, 1);
    setProdCart(updatedCart);
  }

  return (
    <div className="wm">
      <div className="wmh">
        <div className='wmh-resume'>
          <span className='wmh-prod_select-title'>Resumo do carrinho:</span>
          <div>
            <span>QTD Itens:<b> {qtd_items}</b></span>
          </div>
          <div>
            <span>
              Peso: 0
            </span>
          </div>
          <div>
            <span>
              Valor Total:
              <b>R$ {amountCart}</b>
            </span>
          </div>
        </div>
      </div>
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
                <th>Mostrar | Remover:</th>
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
                      <td className='td-dflex-row'>
                        <div className='bt-icon bt-icon-primary' onClick={() => handdlerShowMoreProd(data) }><TbCopyPlusFilled/></div>
                        <div className='bt-icon bt-icon-remove' onClick={() => handdlerRemoveItemCart(data,index) }><FaTrashAlt/></div>
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