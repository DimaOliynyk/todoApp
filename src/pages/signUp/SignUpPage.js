import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SignUpPage.css'
import logo from '../../images/logo.png'
import defaultAvatar from '../../images/defaultAvatar.png'


export default class SignUpPage extends Component{
    render(){
        return(
            <>
                <header className='signUpPageHeader'>
                    <img src={logo} />
                </header>

                <body className='signUpPageBody'>
                    <div className='signUpPageLoginFormWrap'>
                        <h2>Sign Up</h2>
                        <img src={defaultAvatar}/>


                        <div className='signUpPageLoginForm'>
                            <input type='text' placeholder='Username' id='username'/>
                            <input type='text' placeholder='Emal' id='email'/>
                            <input type='text' placeholder='Password' id='password'/>
                            <input type='text' placeholder='* Confirm Password' id='passwordConfirmation'/>
                            <button onClick={this.login} id='signUpButton'>Sign In</button>
                            <button id='signUpWithGoogleButton'>Sign in with Google</button>
                        </div>
                        <p className='signUpPageLoginFormText'>Already have an account? <b><Link to="/signin">Sign in!</Link></b></p>
                    </div>
                </body>
            </>
        )
    }
}