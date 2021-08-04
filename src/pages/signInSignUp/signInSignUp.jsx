import React from 'react';
import SignIn from '../../components/signIn/signIn.component.jsx';
import SignUp from '../../components/signUp/signUp.component'; 
import {SignInSignUpContainer} from './signInSignUp.styles';


const SignInSignUp = () => (
    <SignInSignUpContainer className='signInSignUp'> 
        <SignIn />
        <SignUp />
    </SignInSignUpContainer>

);


export default SignInSignUp;