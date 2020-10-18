import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth ,signInWithGoogle } from '../../firebase/firebase.utils.js'

import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = event => {
        const value = event.target.value
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    // one of the way to pass async function in reactjs
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch(err){
            console.log(err)
        }
    }


    render() {
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        type="email" 
                        label="email"
                        required 
                    />

                    <FormInput 
                    name="password" 
                    handleChange={this.handleChange} 
                    value={this.state.password} 
                    type="password" 
                    label="password"
                    required 
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;