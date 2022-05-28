import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'harsharan'
  render() {
    return (
      <div>hello {this.c} is creating a project </div>
    )
  }
}

