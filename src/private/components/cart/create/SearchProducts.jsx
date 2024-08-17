import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FiLoader } from "react-icons/fi";
import { TbCopyPlusFilled } from "react-icons/tb";

function SearchProducts() {
  const [query, setQuery] = useState('');
  const [ load, setLoad ] = useState(false);

  function handdlerSubmitForm (event){
    event.preventDefault();
    setLoad(true)

  
    setTimeout(()=>{
      setLoad(false)
    },2000)
  }

  return (
    <div className='wm'>
      {load && <FiLoader className='mw_loading'/>}
      <div className="wmh">
        <span className='wmh-title'>FERRAMENTAS DE BUSCA.</span>
        <form className='w_left' onSubmit={(e) => handdlerSubmitForm(e) }>
          <label htmlFor="title">Título: </label>
          <input type="text" name="title" id="title" onChange={ (e) => setQuery(e.target.value) }/>
          <button className='wmh-search' ><CiSearch/></button>
        </form>
      </div>
      <div className="wmb">
        <span className='wmb-title'>RESULTADO DA BUSCA.</span>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID:</th>
                <th>TITULO:</th>
                <th>MARCA:</th>
                <th>PREÇO:</th>
                <th>PESO:</th>
                <th>QTD ESTOQUE:</th>
                <th>DETALHES:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Loção Hidratante</td>
                <td>CeraVe</td>
                <td>R$: 78,89</td>
                <td>473 Ml</td>
                <td>25</td>
                <td>
                  <button>Mostrar <TbCopyPlusFilled/></button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Loção Hidratante</td>
                <td>CeraVe</td>
                <td>R$: 78,89</td>
                <td>473 Ml</td>
                <td>25</td>
                <td>
                  <button>Mostrar <TbCopyPlusFilled/></button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Loção Hidratante</td>
                <td>CeraVe</td>
                <td>R$: 78,89</td>
                <td>473 Ml</td>
                <td>25</td>
                <td>
                  <button>Mostrar <TbCopyPlusFilled/></button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Loção Hidratante</td>
                <td>CeraVe</td>
                <td>R$: 78,89</td>
                <td>473 Ml</td>
                <td>25</td>
                <td>
                  <button>Mostrar <TbCopyPlusFilled/></button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Loção Hidratante</td>
                <td>CeraVe</td>
                <td>R$: 78,89</td>
                <td>473 Ml</td>
                <td>25</td>
                <td>
                  <button>Mostrar <TbCopyPlusFilled/></button>
                </td>
              </tr>
              
            </tbody>
          </table>

        </section>
        <div className='wm-pagination'>
            <button type="button" className='wm-bn-prev'>Anterior</button>
            <button type="button" className='wm-bt-next'>Próximo</button>
        </div>
      </div>
    </div>
  )
}

export default SearchProducts