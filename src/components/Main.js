import React from 'react';
import Game from '../modules/Game.js';
import Player from "./Player.js";
import Table from "./Table.js";
import SplitPot from "./SplitPot.js";
import '../style/Main.css';
import background from '../pictures/table-spun.jpg'

class Main extends React.Component {

  constructor(){
    super();
    this.game = new Game();
    this.GETINF = this.GETINF.bind(this);
  }

  GETINF(e){
    e.preventDefault();
   console.log(this.game);
  }

  updateCard(Card){}//calculer si la carte est déja présente sur la table
  openTooltip(){}//voir si le tooltip est deja présent, avec quelle carte...

  render() {

    return (
      <div className="Main">
        <img className="background" src={background} alt="backgroundTable"/>
        <SplitPot />
        <Table table={this.game.table}/>
        <Player number="1" player={this.game.players[1]} positionX="105px" positionY="148px" />
        <Player number="2" player={this.game.players[2]} positionX="17px" positionY="344px" />
        <Player number="3" player={this.game.players[3]} positionX="105px" positionY="526px" />
        <Player number="4" player={this.game.players[4]} positionX="279px" positionY="559px" />
        <Player number="5" player={this.game.players[5]} positionX="489px" positionY="559px" />
        <Player number="6" player={this.game.players[6]} positionX="672px" positionY="519px" />
        <Player number="7" player={this.game.players[7]} positionX="741px" positionY="343px" />
        <Player number="8" player={this.game.players[8]} positionX="646px" positionY="148px" />
        <button onClick={this.GETINF}> GET INF </button>
      </div>
    )
  }
}
export default Main;
