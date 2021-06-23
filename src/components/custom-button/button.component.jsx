import React from 'react';
import './button.style.scss';


const CustomButton = ({ children, isGoogleSignIn, ...others }) => (

        <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} { ...others }>
            { children } 
        </button>
);



export default CustomButton;
