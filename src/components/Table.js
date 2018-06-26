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
    if(desactivatedButton){
      desactivatedButton.className = "selectButton"
    }
    e.target.className += " activatedfalse"
    this.setState({openCardNumber : openingCardNumber})
    this.props.table.numberActivateCard = openingCardNumber;
  }

  render() {
    const position = {
      left : "331px",
      top: "364px"
    }
    return (
      <div className="table">
        <div openingcard='0' className="selectButton" style={{left:3}} onClick={(e) => {this.updateOpenCardNumber(e)}}></div>
        <Card tablePosition= "1" card={this.props.table.cardsTable[1]} currentActivation={this.state.openCardNumber} position={position}/>
        <Card tablePosition= "2" card={this.props.table.cardsTable[2]} currentActivation={this.state.openCardNumber} position={position}/>
        <Card tablePosition= "3" card={this.props.table.cardsTable[3]} currentActivation={this.state.openCardNumber} position={position}/>
        <div openingcard="3" className="selectButton" style={{left:112}} onClick={(e) => {this.updateOpenCardNumber(e)}}> </div>
        <div className="marge"> </div>
        <Card tablePosition= "4" card={this.props.table.cardsTable[4]} currentActivation={this.state.openCardNumber} position={position}/>
        <div openingcard="4" className="selectButton" style={{left:167}} onClick={(e) => {this.updateOpenCardNumber(e)}}> </div>
        <div className="marge"> </div>
        <Card tablePosition= "5" card={this.props.table.cardsTable[5]} currentActivation={this.state.openCardNumber} position={position}/>
        <div openingcard="5" className="selectButton" style={{left:223}} onClick={(e) => {this.updateOpenCardNumber(e)}}> </div>
      </div>
    );
  }
}

export default Table;
