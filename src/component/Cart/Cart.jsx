import React from 'react';
import './Cart.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({cart , handleClearCart , children}) => {
    // console.log(cart)
let totalPrice = 0;
let totalShipping = 0;
let quantity = 0;

for (const product of cart){
    //  product.quantity =  product.quantity || 1 ;
    //  if(product.quantity === 0){
    //     product.quantity = 1;
    //  }

     totalPrice = totalPrice + product.price * product.quantity;
     totalShipping = totalShipping +  product.shipping;
     quantity = quantity + product.quantity;

}
const tax = totalPrice * 2/100;
const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected-items : {quantity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping : ${totalShipping} </p>
            <p>Tax : ${tax.toFixed(2)} </p>
            <h6>Grand Total :${grandTotal.toFixed(2)} </h6>
             
             <button onClick={handleClearCart} className='btn-delete-cart'><span className='cart-text'>Clear Cart</span><TrashIcon className="icon-all-delete text-blue-500" /></button>
             {children}
        </div>
     
    );
};

export default Cart;