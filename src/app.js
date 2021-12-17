import React from 'react';

import ToDo from './components/todo/todo.js';
import Settings from '../src/context/sittingsContext'
import Auth from './context/authContext'
import Login from './components/todo/Login.js';
import Signup from './components/todo/Signup.js';

export default class App extends React.Component {
  // componentDidMount = () => {
  //   location.reload();
  // }
  

//  refresh(){


//   }
  
  render() {
    return (
      <Auth>
        <Settings>
        <br/>
        <br/>
        <br/>

        <Login/>
        <br/>
        <br/>
       
       
      
      <ToDo />
      </Settings>
      </Auth>
    );
  }
}
