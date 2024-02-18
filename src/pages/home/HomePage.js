import React, { Component } from 'react'

import './HomePage.css'
import defaultAvatar from '../../images/defaultAvatar.png'

export default class HomePage extends Component{
    state = {
        username: 'test',
        profileLogo: 0
    }
    render(){
        return(
            <>
                <header className='homePageHeader'>
                    <div>
                        <h3>Hello {this.state.username}</h3>
                        <p>You have work today</p>
                    </div>

                    <img src={defaultAvatar}/>
                </header>

                <body className='homePageBody'>
                        <div className='homePageBodyMainTasksWrap'>
                            <div>
                                <img src={0}/>

                                <div>
                                    <p>Project</p>
                                    <p>2</p>
                                </div>
                            </div>
                        </div>
                </body>
                <p>home page</p>
            </>
        )
    }
}