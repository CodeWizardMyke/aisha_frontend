import React from 'react'
import { TbCopyPlusFilled } from "react-icons/tb";

function CreateCartFinish({clientSelect, prodCart,setProd,setNavPage}) {

  function handdlerShowMoreProd (item) {
    setProd(item);
    setNavPage('sp');
  }

  return (
    <div className="wm">
      <div className="wmh">
        <span className='wmh-title'>Finalizar carrinho:</span>
        <div className='w-400'>
          <div className='wmh-content-bt'>
            <button className='bt bt-cancel'>Cancelar</button>
            <button className='bt bt-approved'>Aprovar</button>
          </div>
          <div className="cart_create_res">
            <label htmlFor="lkCart">Link do carrinho:</label>
            <input type="text" id='lkCart'/>
            <button className='bt-coppy'>Copiar</button>
          </div>
        </div>
        <div className='wmh-box w-200'>
          <span className="wmh-box-title">Histórico cliente</span>
          <div className="wmh-box-colum">
            <div>
              <span>Total gastos: R$0</span>
            </div>
            <div>
              <span>Média compra mês: R$0</span>
            </div>
            <div>
              <span>Média anual: R$0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="wmb content-flex">
        <section className='w-400'>
          <div className="wmb-bx-header"></div>
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
          <div className="wmb-bx-footer"></div>
        </section>
        <aside className='wmb-bx-content w-200'>
          <div className='wmb-bx'>
            <span className="wmb-bx-title">Dados Pessoais:</span>
            <div className="flex-colum">
              <span>Instagram: {clientSelect.clientInstagram}</span>
              <span>Nome: {clientSelect.clientName}</span>
              <span>Email: {clientSelect.email}</span>
              <span>Telefone:: {clientSelect.telephone}</span>
              <span>CPF: {clientSelect.cpf}</span>
              <span>Data Nascimento: {clientSelect.age}</span>
            </div>
          </div>
          <div className='wmb-bx'>
            <span className="wmb-bx-title">Endereço principal:</span>
            <div className="flex-colum">
              <span>Complemento:: {clientSelect.complement}</span>
              <span>Logradouro: {clientSelect.road}</span>
              <span>Bairro: {clientSelect.district}</span>
              <span>Cidade:: {clientSelect.city}</span>
              <span>Estado:: {clientSelect.state}</span>
              <span>Referência: {clientSelect.reference}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default CreateCartFinish