import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  
const [products , setProducts] = useState([])

const [cart , setCart] = useState([])

 useEffect(()=>{
     fetch('products.json')
     .then(res =>res.json())
     .then(data => setProducts(data))
 } ,[]);


//  local storange ;
useEffect(()=>{
    const storedCart = getShoppingCart();
    let savedCart = [];
        //    step-1 : get id of the added products 
    for (const id in storedCart){
        //    step-2 : get products from prosycts state by using id 
        const addedProduct = products.find(product => product.id == id)   ;
        if(addedProduct){
            // step-3 : add quantity 
            const quantity = storedCart[id];
            addedProduct.quantity = quantity ;
            // step -4 : add th added product to the saved cart 
            savedCart.push(addedProduct)
            
        }
        // console.log('added products ',addedProduct)
    }
    // step-5 : set the cart 
  setCart(savedCart)
},[products])
 


 const handleAddToCart =(product)=>{
    
    let newCart = [];
     const exist = cart.find(pd => pd.id === product.id);
     if(!exist){
      product.quantity = 1;
      newCart = [...cart , product]
     }
     else{
        exist.quantity = exist.quantity + 1 ;
        const remaining = cart.filter(pd => pd.id !== product.id);
        newCart = [...remaining , exist]
     }



    // const newCart = [...cart , product]
    setCart(newCart)
    addToDb(product.id)
}



    return (
        <div className='shop-container'>
             <div className="product-container">
                {
                    products.map(product => <Product product = {product} key={product.id} handleAddToCart = {handleAddToCart}></Product>)
                }
             </div>
             <div className="cart-container">
                   <Cart cart ={cart}></Cart>
             </div>
        </div>
    );
};

export default Shop;