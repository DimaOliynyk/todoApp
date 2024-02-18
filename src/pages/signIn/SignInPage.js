import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'

import axios from 'axios'

import './SignInPage.css'
import logo from '../../images/logo.png'

export default class SignInPage extends Component{

    state  = {
        username: '',
        password: '',
        user: '',
        isLogin: false,
    }

    handleCredentials = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }
    
    login = (e) => {
        e.preventDefault()
        if(this.state.username !== undefined){
            axios.post('http://192.168.0.154:5000/users/login', {
                username: this.state.username,
                password: this.state.password
              })
              .then((res) =>{
                this.setState({isLogin: true})
                localStorage.setItem('_id', res.data.user._id)
                console.log('login succesful')
                // return (<Navigate to={`/profile/${this.state.username}`}/>)
              })
        }
    }
    render(){
        console.log(this.state)
        if(this.state.isLogin === true){
            return <Navigate to={`/profile/${localStorage.getItem('_id')}`}/>
        } else if(this.state.isLogin === false){
            return (
                <>
                        <header className='signInPageHeader'>
                            <img src={logo} />
                        </header>
    
                        <body className='signInPageBody'>
                            <div className='signInPageLoginFormWrap'>
                                <h2>Welcome Back!</h2>
    
                                <div className='signInPageLoginForm'>
                                    <input type='text' placeholder='Username' id='username' onChange={this.handleCredentials}/>
                                    <input type='text' placeholder='Password' id='password' onChange={this.handleCredentials}/>
                                    <button type='submit' onClick={this.login} id='signInButton'>Sign In</button>
                                    <button id='signInWithGoogleButton'>Sign in with Google</button>
                                </div>
                                <p className='signInPageLoginFormText'>Don't have an account? <b><Link to="/signup">Sign up!</Link></b></p>
                            </div>
                        </body>
                </>
            )   
        }

    }

}