import React from 'react';

import { HeaderContainer, LogoContainer, OptionsContainer,  OptionLink, LogoSvg } from './header.styles';


import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import ShoppingCart from '../cart-component/cart.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selecCurrentUser } from '../../redux/user/user.selector';


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer  to='/'>
             <LogoSvg />
        </LogoContainer>
        <OptionsContainer> 
            <OptionLink  to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink  to='/contact'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink as='div'  onClick={() => auth.signOut()}> 
                    SIGN OUT
                </OptionLink>
            ) : ( 
                <OptionLink className='option' to='/signin'> 
                    SIGN IN
                </OptionLink>
            )}
            <ShoppingCart />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selecCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);