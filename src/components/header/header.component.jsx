import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/aniel.svg'
import './header.style.scss';


const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
             <Logo className='logo' />
        </Link>
        <div className='options-links'> 
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
        </div>
    </div>
);


export default Header;