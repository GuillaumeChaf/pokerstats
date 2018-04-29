import React, { Component } from 'react';
import '../style/SplitPot.css';


class SplitPot extends Component {

  constructor(props){

    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className="SplitPotBox">
        <div className="titleAndStats">
          <h2 className="title"> Split pot :</h2>
          <h2 className="stats"> 38.8% </h2>
        </div>
        <div> </div>
      </div>
    );
  }
}

export default SplitPot;
