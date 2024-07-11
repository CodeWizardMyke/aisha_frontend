import React from 'react'
import './CreateProduct.css'

function CreateProduct() {
  return (
    <div className='CreateProduct'>
        <h2>Cadastrar um novo produto</h2>
        <form className='FormCreateProduct'>
      <div className="form-group w-30">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" defaultValue="produto teste" required />
        <div className="error errors-title"></div>
      </div>

      <div className="form-group w-30">
        <label htmlFor="official_store_name">Nome da Loja Oficial:</label>
        <input type="text" id="official_store_name" name="official_store_name" defaultValue="produto cabelo" required />
        <div className="error errors-official_store_name"></div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoria:</label>
        <input type="text" id="category" name="category" defaultValue="produto cabelo" required />
        <div className="error errors-category"></div>
      </div>

      <div className="form-group w-100 form-group-txt">
        <label htmlFor="discribe">Descrição:</label>
        <textarea id="discribe" name="discribe" rows={10} defaultValue="Hidrata e ajuda a restaurar a barreira protetora da pele. Textura fluida, não oleosa, e de rápida absorção com 3 ceramidas essenciais + ácido hialurônico + exclusiva tecnologia MVE. Indicado para pele seca a extra seca." required />
        <div className="error errors-discribe"></div>
      </div>

      <div className="form-group">
        <label htmlFor="currency_id">Moeda:</label>
        <input type="text" id="currency_id" name="currency_id" defaultValue="BRL" required />
        <div className="error errors-currency_id"></div>
      </div>

      <div className="form-group">
        <label htmlFor="price">Preço:</label>
        <input type="number" id="price" name="price" defaultValue="110.90" required />
        <div className="error errors-price"></div>
      </div>

      <div className="form-group">
        <label htmlFor="originam_price">Preço Original:</label>
        <input type="number" id="originam_price" name="originam_price" defaultValue="110.90" required />
        <div className="error errors-originam_price"></div>
      </div>

      <div className="form-group">
        <label htmlFor="sale_price">Preço de Venda:</label>
        <input type="number" id="sale_price" name="sale_price" defaultValue="110.90" required />
        <div className="error errors-sale_price"></div>
      </div>

      <div className="form-group">
        <label htmlFor="stock">Estoque:</label>
        <input type="number" id="stock" name="stock" defaultValue="222" required />
        <div className="error errors-stock"></div>
      </div>

      <div className="form-group ">
        <label htmlFor="thumbnail">Enviar Imagem:</label>
        <input type="file" name="thumbnail" id="thumbnail" className='custom-file-input' />
        <div className="error errors-thumbnail"></div>
      </div>
      
      <div className="form-group">
        <label htmlFor="use_thumbnail">Usar Miniatura:</label>
        <input type="checkbox" id="use_thumbnail" name="use_thumbnail" defaultChecked />
        <div className="error errors-use_thumbnail"></div>
      </div>

      <div className="form-group">
        <label htmlFor="brand">Marca:</label>
        <input type="text" id="brand" name="brand" defaultValue="CeraVe" required />
        <div className="error errors-brand"></div>
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gênero:</label>
        <input type="text" id="gender" name="gender" />
        <div className="error errors-gender"></div>
      </div>

      <div className="form-group">
        <label htmlFor="GTIN">GTIN:</label>
        <input type="text" id="GTIN" name="GTIN" defaultValue="546897" required />
        <div className="error errors-GTIN"></div>
      </div>

      <div className="form-group">
        <label htmlFor="item_condittion">Condição do Item:</label>
        <input type="text" id="item_condittion" name="item_condittion" defaultValue="new" required />
        <div className="error errors-item_condittion"></div>
      </div>

      <div className="form-group">
        <label htmlFor="line">Linha:</label>
        <input type="text" id="line" name="line" defaultValue="cosmeticos" required />
        <div className="error errors-line"></div>
      </div>

      <div className="form-group">
        <label htmlFor="NET_VOLUM">Volume Líquido:</label>
        <input type="text" id="NET_VOLUM" name="NET_VOLUM" defaultValue="562 Mililitros" required />
        <div className="error errors-NET_VOLUM"></div>
      </div>

      <div className="form-group">
        <label htmlFor="NET_WEIGHT">Peso Líquido:</label>
        <input type="text" id="NET_WEIGHT" name="NET_WEIGHT" />
        <div className="error errors-NET_WEIGHT"></div>
      </div>

      <div className="form-group">
        <label htmlFor="winner_item_id">ID do Item Vencedor:</label>
        <input type="text" id="winner_item_id" name="winner_item_id" />
        <div className="error errors-winner_item_id"></div>
      </div>

      <div className="form-group">
        <label htmlFor="catalog_listing">Listagem no Catálogo:</label>
        <input type="checkbox" id="catalog_listing" name="catalog_listing" defaultChecked />
        <div className="error errors-catalog_listing"></div>
      </div>

      <div className="form-group">
        <label htmlFor="discounts">Descontos:</label>
        <input type="checkbox" id="discounts" name="discounts" defaultChecked />
        <div className="error errors-discounts"></div>
      </div>

      <div className="form-group">
        <label htmlFor="promotions">Promoções:</label>
        <input type="number" id="promotions" name="promotions" defaultValue="25" required />
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
