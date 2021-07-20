import React from 'react';
import './button.style.scss';


const CustomButton = ({ children, isGoogleSignIn, inverted, ...others }) => (

        <button 
            className={`${ inverted ? 'inverted' : '' } custom-button`} { ...others }
            >
            { children } 
        </button>
);



export default CustomButton;
