import React, { Component } from 'react';
import '../style/bootstrap.min.css';
import '../style/Player.css';
import PlayerFrame from "./PlayerFrame.js";
import logoPlus from '../pictures/logoPlus.png';
import logoMoins from '../pictures/logoMoins.png';

import Card from './Card.js';

class Player extends Component {

  constructor(props){
    super(props);
    let style = {left:props.positionX,top:props.positionY}
    this.state = {
      activate : false,
      position : style,
    };
    this.inverseActivation = this.inverseActivation.bind(this);
  }

  inverseActivation() {

    let activation = this.state.activate
    let component = this.component
    if(activation){
      this.imgIcon.setAttribute("src",logoPlus)
      this.setState({activate: false})
      component.setAttribute("class","Player container passiv")
    }
    else{
      this.imgIcon.setAttribute("src",logoMoins)
      this.setState({activate: true})
      component.setAttribute("class","Player container activate")
    }
  }

  render() {

    return (
      <div>
        <div ref={input => {this.component = input;}}className="Player container passiv" style={this.state.position}>
          <div className="row">
            <h1 className="playerName col"> Joueur{this.props.number} </h1>
            <div className="thumbnail col col-lg-2">
              <img  ref={input => {this.imgIcon = input;}} className="img-responsive iconPlayer" onClick={this.inverseActivation} src={logoPlus} alt="add/remove" />
            </div>
          </div>
          <div className="row justify-content-center">
            <Card />
            <Card />
          </div>
        </div>
        <PlayerFrame number={this.props.number} activate={this.state.activate}/>
      </div>
    );
  }
}

export default Player;
