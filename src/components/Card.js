import React, { Component } from 'react';
import '../style/Card.css';
import '../style/bootstrap.min.css';
import {calculs} from '../actions/calcul.js';
import {calculs2} from '../actions/calcul.js';
import Tooltip from './Tooltip.js';

class Card extends Component {

  constructor(props) {
    super(props);

    let symbol = this.props.symbol === undefined? "interrogation" : this.props.symbol;
    let value = this.props.value === undefined? 0 : this.props.value;

    this.state = {
      symbol:symbol,
      value:value,
      tooltip: false,
      activate: "activatedtrue"
    }
    this.updateValueCard = this.updateValueCard.bind(this)
  }

  openTooltip(tooltip){

    const tooltipNumber = document.getElementsByClassName('Tooltip').length;
    if(tooltipNumber === 0){
      this.setState({tooltip})
    }
  }

  updateValueCard(value,symbol){

    this.setState({value,symbol,tooltip:false})
  }

  componentWillReceiveProps(nextProps){

    const tablePosition = this.props.tablePosition
    if(tablePosition != undefined){
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
    let disabled = "";
    if(this.state.activate === "activatedfalse"){disabled = "disabled"}
    return (
        <div>
          <button className={cardClassName} onClick={() => {this.openTooltip(true)}} disabled={disabled}>
            {RealCard && <img src={sourceSymbol} className="symbolCardImg" alt="symbolImg" />}
            <img src={sourceValue} className={cardClass} alt="valueImg" />
          </button>
          {this.state.tooltip && <Tooltip updateValueCard={this.updateValueCard}/>}
        </div>
    )
  }

}

export default Card;
