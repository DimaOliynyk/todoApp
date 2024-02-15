import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'

import logo from '../../images/logo.png'
import arrowRight from '../../images/arrowRight.png'
import './StartPage.css'


export default class StartPage extends Component{

    render(){
        return(
            <body className='startPageBody'>
                <div className='startPageMainContent'>
                    <img src={logo} />
                    <Link to="/signin">
                        <div className='startPageMainContentLinkButton' onClick={() => <Navigate to="/signin"/>}>
                                <p>Get Started</p>
                                <img src={arrowRight} />
                        </div>
                    </Link>
                </div>
            </body>
        )
    }
}