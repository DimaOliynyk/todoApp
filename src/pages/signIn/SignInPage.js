import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SignInPage.css'
import logo from '../../images/logo.png'

export default class SignInPage extends Component{
    login = () => {

    }
    render(){
        return(
            <>
                <header className='signInPageHeader'>
                    <img src={logo} />
                </header>

                <body className='signInPageBody'>
                    <div className='signInPageLoginFormWrap'>
                        <h2>Welcome Back!</h2>

                        <div className='signInPageLoginForm'>
                            <input type='text' placeholder='Username' id='username'/>
                            <input type='text' placeholder='Password' id='password'/>
                            <button onClick={this.login} id='signInButton'>Sign In</button>
                            <button id='signInWithGoogleButton'>Sign in with Google</button>
                        </div>
                        <p className='signInPageLoginFormText'>Don't have an account? <b><Link to="/signup">Sign up!</Link></b></p>
                    </div>
                </body>
            </>
        )
    }

}