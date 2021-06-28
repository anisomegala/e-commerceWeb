import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/button.component.jsx';
import './signIn.style.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' });

        } catch(e) {
            console.log(e);
        };

    };


    handleChange = event => {
        const { value, name} = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                
                    <FormInput   
                            value={this.state.email} 
                            onChange={this.handleChange}
                            type="email" 
                            label='email'
                            name='email' 
                            required />
    
                    <FormInput  
                            value={this.state.password} 
                            onChange={this.handleChange}
                            label='password'
                            type="password" 
                            name='password' 
                            required />
                            <div className='buttons-sign-group'> 
                                <CustomButton type="submit">Sign In </CustomButton>
                                <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign with Google </CustomButton>
                               
                            </div>     
                    
                </form>
            </div>
        )
    }



}

export default SignIn;