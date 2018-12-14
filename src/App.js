import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './Actions'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  changeName(){
    this.props.changeName();
  }
  render() {
    return (
      <div className="App">
      <label> Name :</label>
        {this.props.name}
      <button onClick = {this.changeName.bind(this)}> Change Name</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
