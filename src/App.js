import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css';

import StartPage from './pages/start/StartPage.js';
import SignInPage from './pages/signIn/SignInPage.js';
import SignUpPage from './pages/signUp/SignUpPage.js';
import HomePage from './pages/home/HomePage.js';
import ProfilePage from './pages/profile/ProfilePage.js';
import CreateNewTaskPage from './pages/createNewTask/CreateNewTaskPage.js';
import EditTaskPage from './pages/editTask/EditTaskPage.js';

class App extends Component{
  render(){
    return(
      <>  
        <Routes>
          <Route path="/" element={<StartPage/>}/>;
          <Route path="/signin" element={<SignInPage/>}/>;
          <Route path="/signup" element={<SignUpPage/>}/>;
          <Route path="/home" element={<HomePage/>}/>;
          <Route path="/profile/:id" element={<ProfilePage/>}/>;
          <Route path="/task/create" element={<CreateNewTaskPage/>}/>;
          <Route path="/task/:task_id/edit" element={<EditTaskPage/>}/>;
        </Routes>
      </>
    )
  }
}


export default App;
