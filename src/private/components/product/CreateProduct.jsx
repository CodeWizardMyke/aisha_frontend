import { useEffect, useState } from 'react'
import aishaFetch from '../../axios/config'
import Loading from '../loading/Loading'

function CreateProduct() {
  const [ loading, setLoading] = useState(false);
  const [ errors, setErrors] = useState([]);
  const [ currency, setCurrency] = useState('BRL')
  const [ price, setPrice ] = useState('')
  const [ promotions, setPromotions] = useState('')
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(()=>{
    handdlerPricing(price)
  },[currency])

  useEffect(()=>{
  },[promotions,price])


  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      updateErrorsSpan();
      const formData = new FormData(document.getElementById('formPostProd'));
  
      const response = await aishaFetch.post('/product/crud/create',formData,{headers:{'Content-Type':'multipart/form-data'}});
      setLoading(false)
      //createdFeedback();

    } catch (error) {
      setLoading(false);
      const {data} = error.response ?  error.response : { data:undefined };
      if(data){ handdlerErrorsPost(data) };
    }
  };

  function handdlerErrorsPost(data){
    setErrors(data.errors);
    data.errors.map( (e) => document.querySelector(`.errors-${e.path}`).innerHTML = e.msg );
  };
  
  function updateErrorsSpan(){
   if(errors.length > 0){
    errors.map( (e) =>  document.querySelector(`.errors-${e.path}`).innerHTML = '' );
   };
   setErrors([])
  };

  function resetForm(e) {
    e.preventDefault();
    e.target.closest('form').reset();
  }

  function handdlerPricing(e){
    let value = e.target ? e.target.value : e ;

    if(value.length>0){
      value =  parseFloat(value.replace(/\D/g, '')) /100;
    }
    
    if(value *1 >= 0){
      value = value.toLocaleString( 'pt-br',{ style:"currency", currency:currency})
  
      setPrice(value)
    }else{
      setPrice('0');
    }
  }

  function handdleSetPromotions (e) {
    let value = ( e.target.value);

    if(value <0) value = 0;
    if(value >100) value = 100;

    setPromotions(value)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {

     const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='wm'>
        {loading && <Loading/>}
        <div className='wmh'>
          <div className="align-end">
            <span className="mwh-title">Cadastro de um novo produto</span>
          </div>
        </div>
        <form
          className='wmb content-sides'
          onSubmit={handleSubmit}
        >
          <div className='side-rigth cw-60'>
            <div className="form-group cw-100">
              <label htmlFor="title">Nome do produto:</label>
              <input type="text" id="title" name="title" placeholder="Creme Hidratante Corporal"  />
              <div className="error errors-title"></div>
            </div>

            <div className="form-group cw-100">
              <label htmlFor="official_store_name">Nome da Loja Oficial:</label>
              <input type="text" id="official_store_name" name="official_store_name" placeholder="Creme Hidratante Corporal"  />
              <div className="error errors-official_store_name"></div>
            </div>

            <div className="form-group w-15">
              <label htmlFor="category">Categoria:</label>
              <input type="text" id="category" name="category" placeholder="Creme"  />
              <div className="error errors-category"></div>
            </div>

            <div className="form-group">
              <label htmlFor="brand">Marca:</label>
              <input type="text" id="brand" name="brand" placeholder="CeraVe"  />
              <div className="error errors-brand"></div>
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gênero:</label>
              <select name="gender">
                <option value="unisex">Unisex</option>
                <option value="female">Feminino</option>
                <option value="male">Masculino</option>
              </select>
              <div className="error errors-gender"></div>
            </div>

            <div className="form-group w-15 ">
              <label htmlFor="GTIN">GTIN:</label>
              <input type="text" id="GTIN" name="GTIN" placeholder="155668489"  />
              <div className="error errors-GTIN"></div>
            </div>

            <div className="form-group w-10">
              <label htmlFor="item_condittion">Condição:</label>
              <select name="item_condittion" id="item_condittion">
                <option value="new">Novo</option>
                <option value="common">Comum</option>
              </select>
              <div className="error errors-item_condittion"></div>
            </div>

            <div className="form-group w-10">
              <label htmlFor="line">Linha:</label>
              <input type="text" id="line" name="line" placeholder="Cosméticos"/>
              <div className="error errors-line"></div>
            </div>

            <div className="form-group w-15 ">
              <label htmlFor="NET_VOLUM">Volume Líquido:</label>
              <input type="text" id="NET_VOLUM" className='align-center' name="NET_VOLUM" placeholder='454g'  />
              <div className="error errors-NET_VOLUM"></div>
            </div>

            <div className="form-group w-15">
              <label htmlFor="NET_WEIGHT">Peso Líquido:</label>
              <input type="text" id="NET_WEIGHT" className='align-center' name="NET_WEIGHT" placeholder='454g'/>
              <div className="error errors-NET_WEIGHT"></div>
            </div>

            <div className="form-group">
              <label htmlFor="winner_item_id">Data Vencimento:</label>
              <input type="date" name="winner_item_id" id="winner_item_id" />
              <div className="error errors-winner_item_id"></div>
            </div>

            <div className="form-pricing">  
                <span className='form-title'>Precificação</span>
              <div className="form-group w-10">
                <label htmlFor="currency_id">Moeda:</label>
                <select name="currency_id" id="currency_id" className='custom-select' onChange={(e)=> setCurrency(e.target.value)}>
                  <option value="BRL">BRL</option>
                  <option value="USD">USD</option>
                </select>
                <div className="error errors-currency_id"></div>
              </div>

              <div className="form-group w-15">
              <label htmlFor="price">Preço:</label>
              <div className='overlay'>
                <input type="text" id="price" className='overlay-hide' onChange={ handdlerPricing } />
                <input type="text" name="price" className='align-end' readOnly  defaultValue={price} />
              </div>
                <div className="error errors-price"></div>
              </div>

              <div className="form-group w-15">
                <label htmlFor="promotions">Descontos: %</label>
                <div className="overlay">
                  <input type="number" id="promotions" className='overlay-hide' onChange={handdleSetPromotions} />
                  <input type="text" name="promotions" className='align-center' readOnly defaultValue={promotions} />
                </div>
                <div className="error errors-promotions"></div>
              </div>

              <div className="form-group w-10">
                <label htmlFor="stock">Estoque:</label>
                <input type="number" id="stock" className='align-center' name="stock" min={1} placeholder='1' />
                <div className="error errors-stock"></div>
              </div>

            </div>
          </div>
          
          <div className="side-left cw-40">

            <div className="form-group w-100 ">
              <label htmlFor="discribe">Descrição:</label>
              <textarea id="discribe" name="discribe" rows={10} placeholder='Detalhes técnicos do produto.' />
              <div className="error errors-discribe"></div>
            </div>

              
            <div className="custom-input-file">
              <button type='button' className='bt bt-file'>
                <label htmlFor="thumbnails">Enviar Imagem</label>
              </button>
              <input type="file" name="thumbnails" id="thumbnails" onChange={handleImageChange} />
              <div className="error errors-thumbnails"></div>
              <div className="wrapper-images">
                  <span className="wrapper-images-title">Imagens Selecionadas:</span>
                  {selectedImage ?(
                    <div className="images">
                      <img src={selectedImage} alt="Imagem selecionada" />
                    </div>
                  ) : "Nenhuma imagem selecionada!"}
              </div>
            </div>
          
            <div className="form-checkbox">
              <label htmlFor="use_thumbnail">Usar Miniatura:</label>
              <input type="checkbox" id="use_thumbnail" name="use_thumbnail" defaultChecked />
              <div className="error errors-use_thumbnail"></div>
            </div>
            
            <div className="form-checkbox">
              <label htmlFor="catalog_listing">Listagem no Catálogo:</label>
              <input type="checkbox" id="catalog_listing" name="catalog_listing" defaultChecked />
              <div className="error errors-catalog_listing"></div>
            </div>

            <div className="form-checkbox">
              <label htmlFor="discounts">Autorizar descontos:</label>
              <input type="checkbox" id="discounts" name="discounts"  />
              <div className="error errors-discounts"></div>
            </div>

            <div className='d-flex-row'>
              <button type="button"  className="bt bt-clean" onClick={resetForm}>Limpar</button>
              <button type="submit" className="bt bt-primary">Enviar</button>
            </div>
            
          </div>

        </form>
    </div>
  )
}

export default CreateProduct
