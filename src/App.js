import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onClick(){
    alert (" watch out!!! you're in bad luck !!! my love follows you to the end of the world")
  }

  render() {
    return (
      <div className="App">
        <span className="spanClass">Dxl, u SBbbb!</span>
        <button className="buttonClass" onClick={this.onClick.bind(this)} >Click me to see more what i wanna tell u</button>
      </div>
    );
  }
}

export default App;
