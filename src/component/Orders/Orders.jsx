import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import {PrinterIcon} from '@heroicons/react/24/solid'

const Orders = () => {
    const SavedCart = useLoaderData();
    const [cart , setCart] = useState(SavedCart)
    
   const handleRemoveFromCart = (id) =>{
      const remaining = cart.filter(product => product.id !== id)
      setCart(remaining)
      removeFromDb(id)
   }
   const handleClearCart = ()=>{
       setCart([]);
       deleteShoppingCart();
   }


    return (
        <div className='shop-container'>
             <div className='review-container'>
                 {
                    cart.map(product => <ReviewItem key={product.id} product ={product} 
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                 }
             </div>
             <div className='cart-container'>
                  <Cart cart={cart} handleClearCart={handleClearCart}>
                       <Link className='proceed-link' to ="/checkout"><button className='btn-proceed'>
                        <span>Proceed Checkout</span>  
                       <PrinterIcon className="arrow-icon h-4 w-4 text-blue-500" />
                       </button></Link>
                    </Cart>
             </div>
        </div>
    );
};

export default Orders;