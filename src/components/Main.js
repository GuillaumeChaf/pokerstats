import React from 'react';
import Game from '../modules/Game.js';
import Player from "./Player.js";
import Table from "./Table.js";
import SplitPot from "./SplitPot.js";
import Tooltip from './Tooltip.js';
import Combination from '../modules/Combinations/Combination.js';//retirer a la fin (test)
import Card from '../modules/Card.js';//retirer a la fin (test)
import '../style/Main.css';
import background from '../pictures/table-spun.jpg'

class Main extends React.Component {

  constructor(){
    super();
    this.state = {
      tooltip : false,
      tooltipCardClass : null,
      tooltipCardComponent : null
    }
    this.game = new Game();
    this.GETINF = this.GETINF.bind(this);
    this.checkExistCard = this.checkExistCard.bind(this);
    this.openTooltip = this.openTooltip.bind(this);
    this.closeTooltip = this.closeTooltip.bind(this);
  }

  GETINF(e){
    e.preventDefault();
    const combination = new Combination()
    let table = [new Card("K","spade"),new Card("K","diamond"),new Card("A","heart"),new Card("K","heart"),new Card("K","clover")]
    let table2 = table.slice(0,table.length)
    let table3 = table.slice(0,table.length)
    console.log(combination.rankHigh(table))
    console.log(combination.rankHighWithoutDouble(table2))
    console.log(combination.topSymbolSerie(table3))
  }

  checkExistCard(card){

    const players = this.game.players
    const table = this.game.table.cardsTable
    for(var player in players){
      if(card.equals(players[player].card1) || card.equals(players[player].card2)){
        return true;
      }
    }
    for(var Card in table){
      if(card.equals(table[Card])){
        return true;
      }
    }
    return false;
  }

  openTooltip(cardClass,cardComponent){

    this.setState({tooltip : true,
                  tooltipCardClass : cardClass,
                  tooltipCardComponent : cardComponent})
  }

  closeTooltip(){

    this.setState({
      tooltip : false,
      tooltipCardClass : null,
      tooltipCardComponent : null
    })
}
  render() {

    return (
      <div className="Main">
        <img className="background" src={background} alt="backgroundTable"/>
        <SplitPot />
        <Table table={this.game.table} openTooltip={this.openTooltip}/>
        <Player number="1" player={this.game.players[1]} openTooltip={this.openTooltip} positionX="105px" positionY="148px" />
        <Player number="2" player={this.game.players[2]} openTooltip={this.openTooltip} positionX="17px" positionY="344px" />
        <Player number="3" player={this.game.players[3]} openTooltip={this.openTooltip} positionX="105px" positionY="526px" />
        <Player number="4" player={this.game.players[4]} openTooltip={this.openTooltip} positionX="279px" positionY="559px" />
        <Player number="5" player={this.game.players[5]} openTooltip={this.openTooltip} positionX="489px" positionY="559px" />
        <Player number="6" player={this.game.players[6]} openTooltip={this.openTooltip} positionX="672px" positionY="519px" />
        <Player number="7" player={this.game.players[7]} openTooltip={this.openTooltip} positionX="741px" positionY="343px" />
        <Player number="8" player={this.game.players[8]} openTooltip={this.openTooltip} positionX="646px" positionY="148px" />
        <button onClick={this.GETINF}> GET INF </button>
        {this.state.tooltip && <Tooltip cardClass={this.state.tooltipCardClass} checkExistCard={this.checkExistCard} cardComponent={this.state.tooltipCardComponent} closeTooltip={this.closeTooltip}/>}
      </div>
    )
  }
}
export default Main;
