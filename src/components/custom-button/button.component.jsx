import React from 'react';
import {ButtonContainer} from './button.style';


const CustomButton = ({ children, ...props }) => (

        <ButtonContainer {...props}>
            { children } 
        </ButtonContainer>
);



export default CustomButton;
