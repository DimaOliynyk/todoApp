import React, { Component } from 'react';

import axios from 'axios';


export default class ProfilePage extends Component{
    state = {
        username: '',
        email: '',
        number: '',
        avatarUrl: ''
    }

    componentDidMount  = () => {
        axios.get(`http://192.168.0.154:5000/users/${localStorage.getItem('_id')}`)
        .then((res) =>{
            console.log(res.data)
            this.setState({
                username: res.data.user.username,
                email: res.data.user.email,
                number: res.data.user.number,
                avatarUrl: res.data.user.avatarUrl
            })
        })
    }

    render(){
        
        return(
            <>
                <header className='profilePageHeader'>
                    <div>
                        <h3>Hello {this.state.username}</h3>
                        <p>You have work today</p>
                    </div>

                    <img src={this.state.avatarUrl} alt='avatar profile picture'/>
                </header>

                <body className='profilePageBody'>
                    <div className='profilePageBodyGeneralTasks'>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                </body>
                {/* <p>profile page</p>
                <p>{this.state.username}</p>
                <p>{this.state.email}</p>
                <p>{this.state.number}</p> */}
            </>
        )
    }
}