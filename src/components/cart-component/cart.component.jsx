import React from 'react';
import './cart.style.scss';
import { ReactComponent as Cart } from '../../assets/shopping-bag.svg';


const ShoppingCart = () => (
    <div className='cart-icon'> 
        <Cart className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);


export default ShoppingCart;