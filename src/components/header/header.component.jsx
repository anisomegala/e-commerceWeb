import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/aniel.svg'
import './header.style.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import ShoppingCart from '../cart-component/cart.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
             <Logo className='logo' />
        </Link>
        <div className='options-links'> 
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}> 
                    SIGN OUT
                </div>
            ) : ( 
                <Link className='option' to='/signin'> 
                    SIGN IN
                </Link>
            )}
            <ShoppingCart />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
);

const mapStateToProps = ({user: { currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);