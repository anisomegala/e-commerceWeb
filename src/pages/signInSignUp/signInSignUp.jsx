import React from 'react';
import SignIn from '../../components/signIn/signIn.component.jsx';
import SignUp from '../../components/signUp/signUp.component'; 
import './signInSignUp.style.scss';


const SignInSignUp = () => (
    <div className='signInSignUp'> 
        <SignIn />
        <SignUp />
    </div>

);


export default SignInSignUp;