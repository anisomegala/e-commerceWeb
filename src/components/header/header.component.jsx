import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';


const Header = () => (
    <div className='header'>
        <Link className='logo' to='/'>
             AniShop
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