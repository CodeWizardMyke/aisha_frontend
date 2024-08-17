import React from 'react'
import './ShowMoreProduct.css'
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import aishaFetch from '../../../axios/config'

function ShowMoreProduct({prod,setNavPage}) {
  const urlAPI = aishaFetch.defaults.baseURL;
  const urlImages =urlAPI.split('/api')[0]

  return (
    <div className='wm'>
      <div className="prevBTN">
        <button onClick={() => setNavPage('') } >Voltar <TbPlayerTrackPrevFilled/> </button>
      </div>
      <div className="wsp-box">
        <span className="wsp-box-title">INFORMAÇÕES BÁSICAS.</span>
        <div className="wm-span-group">
          <span>Título:</span>
          <span>{prod.title}</span>
        </div>
        <div className="wm-span-group">
          <span>Título Oficial:</span>
          <span>{prod.official_store_name}</span>
        </div>
        <div className="wm-span-group">
          <span>Categoria:</span>
          <span>{prod.category}</span>
        </div>
        <div className="wm-span-group">
          <span>Marca:</span>
          <span>{prod.brand}</span>
        </div>
        <div className="wm-span-group">
          <span>Linha:</span>
          <span>{prod.line}</span>
        </div>
        <div className="wm-span-group">
          <span>Gênero:</span>
          <span>{prod.gender}</span>
        </div>
        <div className="wm-span-group w-100 mh-100">
          <span>Descrição:</span>
          <span>{prod.discribe}</span>
        </div>
      </div>

      <div className="wsp-box">
        <span className="wsp-box-title">Valores Monetários.</span>
        <div className="wm-span-group">
          <span>Preço:</span>
          <span>R$: {prod.price} </span>
        </div>
        <div className="wm-span-group">
          <span>Preço Original:</span>
          <span>R$: {prod.originam_price} </span>
        </div>
        <div className="wm-span-group">
          <span>Promoção:</span>
          <span>%: {prod.promotions} </span>
        </div>
        <div className="wm-span-group">
          <span>Preço Promocional:</span>
          <span>R$: {prod.sale_price} </span>
        </div>
        <div className="wm-span-group">
          <span>Permitir Promoção:</span>
          <span>{prod.discounts} </span>
        </div>
        <div className="wm-span-group">
          <span>Quantidade em estoque:</span>
          <span>{prod.stock} </span>
        </div>
      </div>

      <div className="wsp-box">
        <span className="wsp-box-title">Logística:</span>
        <div className="wm-span-group">
          <span>Peso do produto:</span>
          <span>{prod.NET_WEIGHT} </span>
        </div>
        <div className="wm-span-group">
          <span>Volume do produto:</span>
          <span>{prod.NET_VOLUM} </span>
        </div>
        <div className="wm-span-group">
          <span>Código do produto:</span>
          <span>{prod.GTIN} </span>
        </div>  
        <div className="wm-span-group">
          <span>Vencimento:</span>
          <span>{prod.winner_item_id} </span>
        </div>
        <div className="wm-span-group">
          <span>Permitir imagens:</span>
          <span>{prod.use_thumbnail} </span>
        </div>
        <div className="wm-span-group">
          <span>Imagens do produto</span>
        </div>
        <div className='wm-span-group wm-thumbnail'>
           <div className='w-thumbnail-content'>
            <img src={`${urlImages}${prod.thumbnails}`} alt="thumnail" />
           </div>
        </div>
      </div>
    </div>
  )
}

export default ShowMoreProduct