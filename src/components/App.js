import React, { Component } from 'react';
import '../style/bootstrap.min.css'
import '../style/App.css';
import ReactDOM from 'react-dom';
import Main from './Main.js';
import DataPlayerColumn from './DataPlayerColumn.js';

class App extends Component {

  openPlayerFrame(number){


  }
  render() {
    return (
      <div className=" App">
        <header className="App-header">
          <h1 className="App-title">PokerStats</h1>
        </header>
        <div className="App-MainAndDataPlayer ">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
  // cd ../../projetJS/pokerstats
