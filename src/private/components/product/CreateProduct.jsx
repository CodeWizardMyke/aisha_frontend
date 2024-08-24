import { useState } from 'react'
import aishaFetch from '../../axios/config'
import Loading from '../loading/Loading'
import ProductForm from './form_product/ProductForm';

function CreateProduct() {
  const [ loading, setLoading] = useState(false);
  const [ dataErr, setDataErr ] = useState(null);
  const [ errors, setErrors] = useState([]);

  const sendForm =  async (event) => {
    try {
      setLoading(true);
      updateErrors()
      const formData = new FormData(event.target);

      await aishaFetch.post('/product/crud/create',formData,{headers:{'Content-Type':'multipart/form-data'}});
      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false);
      if(error.response){
        setErrors(error.response.data.errors);
        setDataErr(error.response.data)
      }
    }
  };

  function updateErrors(){
    if(errors.length > 0){
     errors.map( (e) =>  document.querySelector(`.errors-${e.path}`).innerHTML = '' );
    };
    setErrors([])
   };
 
  return (
    <section className='wm-content'>
      {loading && <Loading/>}
      <div className="wm-header align-center">
        <h3>Cadastro de novo produto</h3>
      </div>
      <div className='wm'>
        <ProductForm sendForm={sendForm} dataErr={dataErr} />
      </div>
    </section>
  )
}

export default CreateProduct
