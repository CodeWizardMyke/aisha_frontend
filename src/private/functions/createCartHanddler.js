
function  createCartHanddler (products, setProducts ,item, qtdSelect) {
  let cart = [];

  products.map(data => {
    if(data.product_id === item.product_id && data.stock >= qtdSelect){
      data.stock = data.stock - qtdSelect;
      data.qtd_products = qtdSelect;
      cart.push(data)
    }
  })

  setProducts(products)

  return {cart:cart,}
}

export default createCartHanddler;