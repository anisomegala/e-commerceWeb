import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart.style.scss';

import { ReactComponent as Cart } from '../../assets/shopping-bag.svg';


const ShoppingCart = ( { toggleCartHidden }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }> 
        <Cart className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch  => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(ShoppingCart);