import React from 'react';

import ToDo from './components/todo/todo.js';
import Settings from '../src/context/sittingsContext'
import Auth from './context/authContext'
import Login from './components/todo/Login.js';

export default class App extends React.Component {
  render() {
    return (
      <Auth>
        <Settings>

        <Login/>
      
      <ToDo />
      </Settings>
      </Auth>
    );
  }
}
