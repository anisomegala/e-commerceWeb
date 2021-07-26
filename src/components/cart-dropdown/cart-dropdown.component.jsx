import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/button.component';
import CartItem from '../cart-item-component/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter, history } from 'react-router-dom';
import  { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.length ?  (   
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
             ) : (
            <span className='Empty-message'>Your cart is empty</span>
             )}
        </div>
        <CustomButton onClick={() => { 
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
            CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));