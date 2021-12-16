import React from 'react';

import ToDo from './components/todo/todo.js';
import Settings from '../src/context/sittingsContext'

export default class App extends React.Component {
  render() {
    return (
      <Settings>
      <ToDo />
      </Settings>
    );
  }
}
