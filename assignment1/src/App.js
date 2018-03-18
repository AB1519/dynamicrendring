import React, { Component } from 'react';
import './App.css';
import Userinput from './usercomponents/userinput.js';
import Useroutput from './usercomponents/useroutput.js'

class App extends Component {
  state = {
    user_name : 'Maggie'
  }

  changeHandler = (event) => {
    this.setState({user_name:event.target.value})
  }
  render() {
  const style = {
    backgroundColor : '#aaa',
    padding: '8px',
    textAlign: 'center'
  }

    return (
      <div style={style}>
      <Userinput  name={this.state.user_name}  changed={this.changeHandler}/>
      <Useroutput  name ={this.state.user_name}  />
      </div>
    );
  }
}

export default App;
