import React from 'react';
import './ReviewItem.css'
import { BeakerIcon ,TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({product , handleRemoveFromCart}) => {
    // console.log(product);
    const {img , id , price , name , quantity} = product ;
    return (
        <div className='review-item'>
              <div className='items-container'>
                    <div>
                        <img src={img} alt=""  />
                    </div>
                    <div className='details'>
                         <p className='review-name'>{name}</p>
                         <p>Price : <span className='orange-text'>${price}</span> </p>
                         <p>Quantity : <span className='orange-text'>{quantity}</span> </p>
                    </div>
                     <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'><TrashIcon className="btn-icon text-blue-500" /></button>
              </div>
        </div>
    ); 
};

export default ReviewItem;