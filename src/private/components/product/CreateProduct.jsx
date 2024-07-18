import { useNavigate} from 'react-router-dom'

import './CreateProduct.css'
import aishaFetch from '../../axios/config'

function CreateProduct() {
  const navigate = useNavigate()
  let errors = []

  const handleSubmit =  async (e) => {
    try {
      e.preventDefault()
      updateErrorsSpan()
      const formData = new FormData(document.getElementById('formPostProd'))
  
      const response = await aishaFetch.post('/product/crud/create',formData,{headers:{'Content-Type':'multipart/form-data'}})

      createdFeedback(response)
      document.getElementById('formPostProd').reset()
    } catch (error) {
      if(error.response.data.errors[0].path === 'token'){
        alert(error.response.data.errors[0].msg)

        localStorage.removeItem('token')
        localStorage.removeItem('employee')
        
        navigate('/manager/auth')
      }else{
        handdlerErrorsPost(error.response.data)
      }
    }
  }

  function handdlerErrorsPost(data){
    errors = data.errors
    if(errors.length > 0) {
      data.errors.map( (e) => document.querySelector(`.errors-${e.path}`).innerHTML = e.msg )
    }
    
  }
  function updateErrorsSpan(){
   if(errors.length > 0){
    errors.map( (e) =>  document.querySelector(`.errors-${e.path}`).innerHTML = '' )
   }
  }
  
  function createdFeedback(response){
    document.querySelector('.stateCreate').style.display = 'flex'
    setTimeout(() => {
      document.querySelector('.stateCreate').style.display = 'none'
    }, 2000)
  }

  return (
    <div className='CreateProduct'>
        <div className='title__createProduct'>
          <h2>Cadastrar um novo produto </h2>
          <span className="stateCreate">Produto criado com sucesso!</span>
        </div>
        <form
          id='formPostProd'
          className='FormCreateProduct'
          onSubmit={handleSubmit}
        >
          <div className="form-group w-30">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" placeholder="Creme Hidratante Corporal"  />
            <div className="error errors-title"></div>
          </div>

          <div className="form-group w-30">
            <label htmlFor="official_store_name">Nome da Loja Oficial:</label>
            <input type="text" id="official_store_name" name="official_store_name" placeholder="Creme Hidratante Corporal"  />
            <div className="error errors-official_store_name"></div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoria:</label>
            <input type="text" id="category" name="category" placeholder="Creme"  />
            <div className="error errors-category"></div>
          </div>

          <div className="form-group w-100 form-group-txt">
            <label htmlFor="discribe">Descrição:</label>
            <textarea id="discribe" name="discribe" rows={10} placeholder=" Desenvolvido com dermatologistas*; - Hidrata e ajuda a restaurar a barreira protetora da pele; - fórmula leve e não oleosa; contém as 3 ceramidas essenciais para a pele + ácido hialurônico - Contém 3 ceramidas essenciais para a pele + ácido hialurônico; - exclusiva tecnologia MVE que garante liberação prolongada por 24; - Indicado para pessoas com pele seca a extra seca; - textura CREMOSA."  />
            <div className="error errors-discribe"></div>
          </div>

          <div className="form-group">
            <label htmlFor="currency_id">Moeda:</label>
            <select name="currency_id" id="currency_id" className='custom-select'>
              <option value="BRL">BRL</option>
              <option value="USD">USD</option>
            </select>
            <div className="error errors-currency_id"></div>
          </div>

          <div className="form-group">
            <label htmlFor="price">Preço:</label>
            <input 
              type="text"
              id="price"
              name="price"
              placeholder='79.90'
            />
            <div className="error errors-price"></div>
          </div>

          <div className="form-group">
            <label htmlFor="originam_price">Preço Original:</label>
            <input type="text" id="originam_price" name="originam_price" placeholder='87.39'/>
            <div className="error errors-originam_price"></div>
          </div>

          <div className="form-group">
            <label htmlFor="sale_price">Preço de Venda:</label>
            <input type="text" id="sale_price" name="sale_price" placeholder='79.90' />
            <div className="error errors-sale_price"></div>
          </div>

          <div className="form-group">
            <label htmlFor="stock">Estoque:</label>
            <input type="number" id="stock" name="stock" min={1}  />
            <div className="error errors-stock"></div>
          </div>

          <div className="form-group ">
            <label htmlFor="thumbnails">Enviar Imagem:</label>
            <input type="file" name="thumbnails" id="" />
            <div className="error errors-thumbnails"></div>
          </div>
          
          <div className="form-group">
            <label htmlFor="use_thumbnail">Usar Miniatura:</label>
            <input type="checkbox" id="use_thumbnail" name="use_thumbnail" defaultChecked />
            <div className="error errors-use_thumbnail"></div>
          </div>

          <div className="form-group">
            <label htmlFor="brand">Marca:</label>
            <input type="text" id="brand" name="brand" placeholder="CeraVe"  />
            <div className="error errors-brand"></div>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gênero:</label>
            <select name="gender" className='custom-select'>
              <option value="unisex">Unisex</option>
              <option value="female">Feminino</option>
              <option value="male">Masculino</option>
            </select>
            <div className="error errors-gender"></div>
          </div>

          <div className="form-group">
            <label htmlFor="GTIN">GTIN:</label>
            <input type="text" id="GTIN" name="GTIN" placeholder="155668489"  />
            <div className="error errors-GTIN"></div>
          </div>

          <div className="form-group">
            <label htmlFor="item_condittion">Condição do Item:</label>
            <select name="item_condittion" className='custom-select' id="">
              <option value="new">Novo</option>
              <option value="common">Comum</option>
            </select>
            <div className="error errors-item_condittion"></div>
          </div>

          <div className="form-group">
            <label htmlFor="line">Linha:</label>
            <input type="text" id="line" name="line" placeholder="Cosméticos"  />
            <div className="error errors-line"></div>
          </div>

          <div className="form-group">
            <label htmlFor="NET_VOLUM">Volume Líquido:</label>
            <input type="text" id="NET_VOLUM" name="NET_VOLUM" placeholder='454g'  />
            <div className="error errors-NET_VOLUM"></div>
          </div>

          <div className="form-group">
            <label htmlFor="NET_WEIGHT">Peso Líquido:</label>
            <input type="text" id="NET_WEIGHT" name="NET_WEIGHT" placeholder='454g'/>
            <div className="error errors-NET_WEIGHT"></div>
          </div>

          <div className="form-group">
            <label htmlFor="winner_item_id">Data Vencimento:</label>
            <input type="date" name="winner_item_id" id="winner_item_id" />
            <div className="error errors-winner_item_id"></div>
          </div>

          <div className="form-group">
            <label htmlFor="catalog_listing">Listagem no Catálogo:</label>
            <input type="checkbox" id="catalog_listing" name="catalog_listing" defaultChecked />
            <div className="error errors-catalog_listing"></div>
          </div>

          <div className="form-group">
            <label htmlFor="discounts">Autorizar descontos:</label>
            <input type="checkbox" id="discounts" name="discounts"  />
            <div className="error errors-discounts"></div>
          </div>

          <div className="form-group">
            <label htmlFor="promotions">Porcentagem de desconto:</label>
            <input type="number" id="promotions" name="promotions" min={1} max={100} placeholder='de 1 a 100'  />
            <div className="error errors-promotions"></div>
          </div>
          <div className='button_content'>
            <button type="button"  className="reset-button">Limpar</button>
            <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
    </div>
  )
}

export default CreateProduct
