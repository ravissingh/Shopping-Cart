import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Products from '../Product/Products'

const Routing = ({ productItems, cartItems,handleAddProduct,handleRemoveProduct,handleCartClear }) => {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}>
                </Route>
                <Route path='/cart' exact element={
                    <Cart 
                    cartItems={cartItems} 
                    handleAddProduct={handleAddProduct} 
                    handleRemoveProduct={handleRemoveProduct}
                    handleCartClear={handleCartClear}/>}>
                </Route>
            </Routes>
        </div>
    )
}

export default Routing
