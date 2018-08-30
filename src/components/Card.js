import React, { Component } from 'react';
import '../style/Card.css';
import '../style/bootstrap.min.css';
import ClassCard from '../modules/Card.js';
import Tooltip from './Tooltip.js';

class Card extends Component {

  constructor(props) {
    super(props);

    let symbol = this.props.symbol === undefined? "interrogation" : this.props.symbol;
    let value = this.props.value === undefined? 0 : this.props.value;

    this.state = {
      symbol: symbol,
      value: value,
      activate: "activatedtrue"
    }
  }

  //sert uniquement pour les cartes de table
  componentWillReceiveProps(nextProps){

    const tablePosition = this.props.tablePosition
    if(tablePosition !== undefined){
      const tableAct = nextProps.currentActivation
      if(tableAct < tablePosition){
        this.setState({activate: "activatedfalse"})
      }
      else{
        this.setState({activate: "activatedtrue"})
      }
    }
  }

  render() {

    const RealCard = this.state.value !== 0;
    const cardClass = RealCard ? "card_img" : "false_card_img" ;
    const sourceSymbol = require('../pictures/' + this.state.symbol + '.png');
    const sourceValue = require('../pictures/' + this.state.value + '.png');
    const cardClassName = "card card_component " + this.state.activate;

    return (
        <div className="cardDiv">
          <button className={cardClassName} onClick={() => {this.props.openTooltip(this.props.card,this)}}>
            {RealCard && <img src={sourceSymbol} className="symbolCardImg" alt="symbolImg" />}
            <img src={sourceValue} className={cardClass} alt="valueImg" />
          </button>
        </div>
    )
  }

}

export default Card;
