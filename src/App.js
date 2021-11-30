
import React, { useState } from 'react';
import data from './components/front/Data';
import Header from './components/front/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './components/front/Routes/Routing';

const App=()=> {
  const { productItems } = data
  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item
        )
      )
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(
        cartItems.map((item) => item.id === product.id
          ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item

        )
      )
    }
  }

  const handleCartClear=()=>{
    setCartItems([])
  }

  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems}/>
        <Routing
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClear={handleCartClear} />
      </Router>
    </div>
  );

}

export default App;
