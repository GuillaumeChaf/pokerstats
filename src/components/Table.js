import React, { Component } from 'react';
import "../style/Table.css";
import Card from "./Card.js";

class Table extends Component {

  constructor(props){
    super(props);
    this.state = {
      openCardNumber : 5
    }
  }

  updateOpenCardNumber(e) {

    const openingCardNumber = e.target.attributes.openingcard.value
    let desactivatedButton = document.getElementsByClassName("activatedfalse selectButton")[0]
    if(desactivatedButton != undefined){
      desactivatedButton.className = "selectButton"
    }
    e.target.className += " activatedfalse"
    this.setState({openCardNumber : openingCardNumber})
  }

  render() {
    return (
      <div className="table">
        <div openingcard='0' className="selectButton" style={{left:3}} onClick={(e) => {this.updateOpenCardNumber(e)}}></div>
        <Card tablePosition= "1" currentActivation={this.state.openCardNumber}/>
        <Card tablePosition= "2" currentActivation={this.state.openCardNumber}/>
        <Card tablePosition= "3" currentActivation={this.state.openCardNumber}/>
        <div openingcard="3" className="selectButton" style={{left:112}} onClick={(e) => {this.updateOpenCardNumber(e)}}> </div>
        <div className="marge"> </div>
        <Card tablePosition= "4" currentActivation={this.state.openCardNumber}/>
        <div openingcard="4" className="selectButton" style={{left:167}} onClick={(e) => {this.updateOpenCardNumber(e)}}> </div>
        <div className="marge"> </div>
        <Card tablePosition= "5" currentActivation={this.state.openCardNumber}/>
        <div openingcard="5" className="selectButton" style={{left:223}} onClick={(e) => {this.updateOpenCardNumber(e)}}> </div>
      </div>
    );
  }
}

export default Table;
