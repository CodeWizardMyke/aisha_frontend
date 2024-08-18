
function  createCartHanddler (products, prodCart, productSelect, qtdSelect, setProdCart,setProducts ) {
  productSelect.qtd_products = Number(qtdSelect);
  
  for( const data of products){
    if(data.product_id === productSelect.product_id && data.stock >= Number(qtdSelect)){
      data.stock = data.stock - Number(qtdSelect);
    }
  }

  setProdCart([...prodCart, productSelect]);

  setProducts(products)
};

export default createCartHanddler;
