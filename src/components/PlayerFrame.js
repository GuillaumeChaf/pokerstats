import React, { Component } from 'react';
import "../style/PlayerFrame.css";

class PlayerFrame extends Component {

  constructor(props){

    super(props);
    this.state = {
      activate: "activatedfalse",
      finality: "win"
    }
  }
  getBasicStyle(){

    const number = Number.parseInt(this.props.number)
    const height = 151.9
    let factor;
    let left;
    if(number < 5){
      factor = number -1
      left = -110
    }
    else{
      factor = Math.abs(number - 8)
      left = 911
    }
    return {top: (factor * height + 74.4),
              left:left,
              height:height}
  }

  getButtonOutsStyle(){

  const number = Number.parseInt(this.props.number)
  let buttonOutsRight;
  let buttonOutsTop;
  let backImage;
      if(number < 5){buttonOutsRight = "-16.2px"; backImage = "leftArrow"} else {buttonOutsRight = "104.6px"; backImage= "rightArrow"};
      if(number === 1 || number === 8){buttonOutsTop = "30px"}
      else if(number === 2 || number === 7){buttonOutsTop = "25px"}
      else if(number === 3 || number === 6){buttonOutsTop = "90px"}
      else if(number === 4 || number === 5){buttonOutsTop = "88px"}

      return {top:buttonOutsTop,
              right:buttonOutsRight,
              'background-url':"url('../pictures/"+backImage+".png')"}
  }

  getNextFinality(){

    const final = this.state.finality
    if(final === "win"){this.setState({finality:"finish"}); this.props.player.finality = "finish";}
    else if(final === "finish"){this.setState({finality:"lose"}); this.props.player.finality = "lose";}
    else if(final === "lose"){this.setState({finality:"win"}); this.props.player.finality = "win";}
  }

  componentWillReceiveProps(nextProps){

    let activateState = "activated" + nextProps.activate
    this.setState({activate:activateState})
  }

  changeFinishCombianson(e){

    this.props.player.finishCombinaison = e.target.value;
  }

  render() {

    const divClass = this.state.finality + " Frame " + this.state.activate
    const buttonFinalityClass = "playerFinalityButton " + this.state.finality
    const selectorClass = "finishCombination " + this.state.finality
    let disabled = "";
    if(this.state.activate === "activatedfalse"){disabled = "disabled"}
    return (
      <div className={divClass} style={this.getBasicStyle()}>
        <p className="namePlayer"> Player {this.props.number} </p>
        <button className={buttonFinalityClass} onClick={() => {this.getNextFinality()}} disabled={disabled}> </button>
        <button className="openOutsButton" style={this.getButtonOutsStyle()} disabled={disabled}> </button>
        <label className="combinationLabel"> With : </label>
        <select className={selectorClass} onChange={(e) => {this.changeFinishCombianson(e)}} disabled={disabled}>
          <option className="combination"> No matter</option>
          <option className="combination"> Royal Flush</option>
          <option className="combination"> Straight Flush</option>
          <option className="combination"> Quads</option>
          <option className="combination"> Full</option>
          <option className="combination"> Flush</option>
          <option className="combination"> Straight</option>
          <option className="combination"> Trips</option>
          <option className="combination"> Two pair</option>
          <option className="combination"> One pair</option>
          <option className="combination"> High card</option>
        </select>
        <p className="statNumber"> </p>
      </div>
    );
  }
}

export default PlayerFrame;
