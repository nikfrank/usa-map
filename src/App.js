import React, { Component } from 'react';
import './App.css';

import USA from './USA';

const colors = ['red', 'blue', 'green'];

class App extends Component {

  state = {}
  
  render() {
    return (
      <div className="App">
        <USA fills={this.state}
             onClick={s=> this.setState({
               [s]: colors[(colors.indexOf(this.state[s])+1) % colors.length]
             })}
        />
      </div>
    );
  }
}

export default App;
