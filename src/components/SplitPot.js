import React, { Component } from 'react';
import '../style/SplitPot.css';


class SplitPot extends Component {

  constructor(props){

    super(props);
    this.state = {
      activate: "activatedfalse"
    }
  }

  render() {
    const divClass= "SplitPotBox " + this.state.activate

    return (
      <div className={divClass}>
        <div className="titleAndStats">
          <h2> Split pot :</h2>
          <p className="stats"> 38.8% </p>
        </div>
        <div> </div>
      </div>
    );
  }
}

export default SplitPot;
// cd ../../projetJS/pokerstats
