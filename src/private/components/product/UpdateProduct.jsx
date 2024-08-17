import './UpdateProduct.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import aishaFetch from '../../axios/config';

function UpdateProduct({product, onClose, setLoading, setItemsUpdated}) {
  const url = aishaFetch.defaults.baseURL.slice(0, -4)

  function uploadProduct(e){
    e.preventDefault();
    setLoading(true);
    const formDate = new FormData(e.target);
    const headers = {
      "Content-Type": "multipart/form-data",
      product_id:product.product_id,
    }

    aishaFetch.put('/product/crud/update',formDate,{headers:headers})
    .then(response => {
      setLoading(false);
      createdFeedback(response)
    })
    .catch(error => {
      setLoading(false);
      console.log(error)
    });
  }

  function createdFeedback(response){
    setItemsUpdated(true);
    let spanMsg = document.querySelector('.stateCreate');
    if(spanMsg){
      spanMsg.style.display = 'flex'
      setTimeout(() => {
        spanMsg.style.display = 'none'
        onClose(true)
      }, 2000)
    };
  }

  function resetForm(e) {
    e.preventDefault();
    e.target.closest('form').reset();
  }

  return (
    <div className='content_form'>
        <div className='form_title_hs'>
          <h2>Atualizar produto</h2>
          <span className="stateCreate">Produto criado com sucesso!</span>
          <button type="button" onClick={onClose} className='close_button'>close <IoMdCloseCircleOutline/> </button>
        </div>
        <form onSubmit={uploadProduct}>
          <div className="form-group w-30">
            <label htmlFor="title">Title:</label>
            <input type="text"  id="title" name="title" placeholder={product.title}  />
            <div className="error errors-title"></div>
          </div>
          <div className="form-group w-30">
            <label htmlFor="official_store_name">Nome da Loja Oficial:</label>
            <input type="text" id="official_store_name" name="official_store_name" placeholder={product.official_store_name}  />
            <div className="error errors-official_store_name"></div>
          </div>
          <div className="form-group w-30">
            <label htmlFor="category">Categoria:</label>
            <input type="text" id="category" name="category" placeholder={product.category}  />
            <div className="error errors-category"></div>
          </div>
          <div className="form-group w-100 form-group-txt">
            <label htmlFor="discribe">Descrição:</label>
            <textarea id="discribe" name="discribe" rows={2} placeholder={product.category}   />
            <div className="error errors-discribe"></div>
          </div>

          <div className="form-group">
            <label htmlFor="currency_id">Moeda:</label>
            <select name="currency_id" id="currency_id" className='custom-select' defaultValue={product.currency_id}>
              <option value="BRL">BRL</option>
              <option value="USD">USD</option>
            </select>
            <div className="error errors-currency_id"></div>
          </div>

          <div className="form-group w-15">
            <label htmlFor="price">Preço:</label>
            <input 
              type="text"
              id="price"
              name="price"
              placeholder={product.price}
            />
            <div className="error errors-price"></div>
          </div>

          <div className="form-group w-15">
            <label htmlFor="originam_price">P/Original:</label>
            <input type="text" id="originam_price" name="originam_price" placeholder={product.originam_price}/>
            <div className="error errors-originam_price"></div>
          </div>

          <div className="form-group w-15">
            <label htmlFor="sale_price">P/Venda:</label>
            <input type="text" id="sale_price" name="sale_price" placeholder={product.sale_price} />
            <div className="error errors-sale_price"></div>
          </div>

          <div className="form-group w-15">
            <label htmlFor="stock">Estoque:</label>
            <input type="number" id="stock" name="stock" min={1} defaultValue={product.stock} />
            <div className="error errors-stock"></div>
          </div>

          <div className='post_image_product'>
            <div>
              <div className="form-group ">
                <label htmlFor="thumbnails">Enviar Imagem:</label>
                <input type="file" name="thumbnails" id="thumbnails" />
                <div className="error errors-thumbnails"></div>
              </div>
              
              <div className="">
                <label htmlFor="use_thumbnail">Usar Miniatura:</label>
                <input type="checkbox" id="use_thumbnail" name="use_thumbnail" defaultChecked />
                <div className="error errors-use_thumbnail"></div>
              </div>
            </div>

            <div className="content_image">
              <div className="box-100">
                <img src={url+product.thumbnails} alt="Imagem do produto" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="brand">Marca:</label>
            <input type="text" id="brand" name="brand"placeholder={product.brand}/>
            <div className="error errors-brand"></div>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gênero:</label>
            <select name="gender" className='custom-select' id='gender' defaultValue={product.gender}>
              <option value="unisex">Unisex</option>
              <option value="female">Feminino</option>
              <option value="male">Masculino</option>
            </select>
            <div className="error errors-gender"></div>
          </div>

          <div className="form-group">
            <label htmlFor="GTIN">GTIN:</label>
            <input type="text" id="GTIN" name="GTIN" placeholder={product.GTIN} />
            <div className="error errors-GTIN"></div>
          </div>

          <div className="form-group">
            <label htmlFor="item_condittion">Condição do Item:</label>
            <select name="item_condittion" id='item_condittion' className='custom-select' defaultValue={product.item_condittion}>
              <option value="new">Novo</option>
              <option value="common">Comum</option>
            </select>
            <div className="error errors-item_condittion"></div>
          </div>

          <div className="form-group">
            <label htmlFor="line">Linha:</label>
            <input type="text" id="line" name="line" placeholder={product.line}  />
            <div className="error errors-line"></div>
          </div>

          <div className="form-group">
            <label htmlFor="NET_VOLUM">Volume Líquido:</label>
            <input type="text" id="NET_VOLUM" name="NET_VOLUM" placeholder={product.NET_VOLUM}   />
            <div className="error errors-NET_VOLUM"></div>
          </div>

          <div className="form-group">
            <label htmlFor="NET_WEIGHT">Peso Líquido:</label>
            <input type="text" id="NET_WEIGHT" name="NET_WEIGHT" placeholder={product.NET_WEIGHT} />
            <div className="error errors-NET_WEIGHT"></div>
          </div>

          <div className="form-group">
            <label htmlFor="winner_item_id">Data Vencimento:</label>
            <input type="date" name="winner_item_id" id="winner_item_id" placeholder={product.winner_item_id}  />
            <div className="error errors-winner_item_id"></div>
          </div>

          <div className="form-group">
            <label htmlFor="catalog_listing">Listagem no Catálogo:</label>
            <input type="checkbox" id="catalog_listing" name="catalog_listing" defaultValue={product.catalog_listing} />
            <div className="error errors-catalog_listing"></div>
          </div>

          <div className="form-group">
            <label htmlFor="discounts">Autorizar descontos:</label>
            <input type="checkbox" id="discounts" name="discounts" defaultValue={product.discounts}  />
            <div className="error errors-discounts"></div>
          </div>

          <div className="form-group">
            <label htmlFor="promotions">Porcentagem de desconto:</label>
            <input type="number" id="promotions" name="promotions" min={1} max={100} placeholder={product.promotions}   />
            <div className="error errors-promotions"></div>
          </div>
          <div className='button_content'>
            <button type="button"  className="reset-button" onClick={resetForm}>Limpar</button>
            <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
    </div>
  )
}

export default UpdateProduct
