import React, { useEffect, useState } from 'react'
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import aishaFetch from '../../axios/config'
import objectConfig from '../../configs/formConfigInputs';
import FormGroupInput from './form_product/FormGroupInput';
import Loading from '../loading/Loading';

function ShowProduct({data,setNavPage, attSucess}) {
  const urlAPI = aishaFetch.defaults.baseURL;
  const urlImages =urlAPI.split('/api')[0]
  
  const [ loading, setLoading ] = useState(false);
  const [ currency, setCurrency] = useState('BRL')
  const [ price, setPrice ] = useState('')
  const [ promotions, setPromotions] = useState('')
  const [ selectedImage, setSelectedImage] = useState(null);

  function sendForm(event){

    const formDate = new FormData(event.target);
    const headers = {
      "Content-Type": "multipart/form-data",
      product_id:data.product_id,
    }

    aishaFetch.put('/product/crud/update',formDate,{headers:headers})
    .then( response => {
      setLoading(false);
      window.alert('atualizad com sucesso');
    })
    .catch( error => {
      console.log(error);
      window.alert("Erro ao atualizar produto");
      setLoading(false);
    });
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

  function resetForm(e) {
    e.preventDefault();
    setPrice('');
    setPromotions('');
    setSelectedImage(null);
    e.target.closest('form').reset();
  }

useEffect(()=>{
  if(data.price){
    let value = data.price;
    value = value.toLocaleString( 'pt-br',{ style:"currency", currency:currency});
    setPrice(value);
  }
},[data, currency])

  return (
    <div className='wm-content'>
      {loading && <Loading />}
      <div className="prevBTN">
        <button onClick={() => setNavPage('') } >Voltar <TbPlayerTrackPrevFilled/> </button>
      </div>
      <form 
        className='wmb content-sides'
        onSubmit={(event)=> {
          event.preventDefault();
          sendForm(event);
        }}
      >
        <div className='side-rigth cw-60'>
          {
            objectConfig.map( (item ,index) => (
              <FormGroupInput 
                key={'formGroupInput'+index}
                oldData={data}
                inputConfig={item.inputConfig}
                cssConfig={item.cssConfig}
              />
            ))
          }

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
              <input type="text" id="price"  name="price" className='overlay-hide' onChange={ handdlerPricing } />
              <input type="text"className='align-end' readOnly  defaultValue={price} />
            </div>
              <div className="error errors-price"></div>
            </div>

            <div className="form-group w-15">
              <label htmlFor="promotions">Descontos: %</label>
              <div className="overlay">
                <input type="number" id="promotions" name="promotions" className='overlay-hide' onChange={handdleSetPromotions}  />
                <input type="text" className='align-center' readOnly defaultValue={promotions} placeholder={data.promotions} />
              </div>
              <div className="error errors-promotions"></div>
            </div>

            <div className="form-group w-10">
              <label htmlFor="stock">Estoque:</label>
              <input type="number" id="stock" className='align-center' name="stock" min={1} placeholder={data ? data.stock : "1"} />
              <div className="error errors-stock"></div>
            </div>
          </div>
        </div>

        <div className="side-left cw-40">

          <div className="form-group w-100 ">
            <label htmlFor="discribe">Descrição:</label>
            <textarea id="discribe" name="discribe" rows={10} placeholder={data.discribe} />
            <div className="error errors-discribe"></div>
          </div>
            
          <div className="custom-input-file">
            <button type='button' className='bt bt-file'>
              <label htmlFor="thumbnails">Enviar Imagem</label>
            </button>
            <div className='content-input-file'>
              <input type="file" name="thumbnails" id="thumbnails" onChange={handleImageChange} />
              <div className="error errors-thumbnails"></div>
            </div>

            <div className="wrapper-images">
                <span className="wrapper-images-title">Imagem do Produto:</span>
                {selectedImage ?(
                  <div className="images">
                    <img src={selectedImage} alt="Imagem selecionada" />
                  </div>
                ) : (
                  <div className="images">
                    <img src={urlImages+data.thumbnails} alt="Imagem atual do produto" />
                  </div>
                )}
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

export default ShowProduct