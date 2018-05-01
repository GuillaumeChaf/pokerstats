import React, { Component } from 'react';
import Icon from './Icon.js';
import '../style/bootstrap.min.css';
import '../style/Tooltip.css';

class Tooltip extends Component{

  constructor(props){

    super(props);
    console.log(document.getElementsByClassName('Main'))

    this.state = {
      symbolSelected : "none",
      valueSelected : "none"
    }
    this.updateTooltip = this.updateTooltip.bind(this);
  }

  updateTooltip(icon){

    if(icon.state.value === "interrogation"){
      this.props.updateValueCard(0,null)
      return
    }
    this.setNewStates(icon)
  }

  tryReturnCard(){

    let iconValue = this.state.valueSelected
    let iconSymbol = this.state.symbolSelected

    if(iconValue !== "none" && iconSymbol !== "none"){
      this.props.updateValueCard(iconValue.state.value,iconSymbol.state.value)
    }
  }

  setNewStates(icon){

    let iconValue = icon.state.value
    if(isNaN(parseInt(iconValue)) && iconValue.length > 1){
      if(icon === this.state.symbolSelected){
        this.state.symbolSelected.setState({selected: "notSelected"})
        this.setState({symbolSelected:"none"})
      }
      else{
        if(this.state.symbolSelected !== "none"){
          this.state.symbolSelected.setState({selected: "notSelected"})
        }
        this.setState({symbolSelected:icon},() => this.tryReturnCard())
      }
    }
    else{
      if(icon === this.state.valueSelected){
        this.state.valueSelected.setState({selected: "notSelected"})
        this.setState({valueSelected:"none"})
      }
      else{
        if(this.state.valueSelected !== "none"){
          this.state.valueSelected.setState({selected: "notSelected"})
        }
        this.setState({valueSelected:icon},() => this.tryReturnCard())
      }
    }
  }

  componentDidMount() {
    console.log("jojo")
    window.addEventListener("resize", this.windowResize());
ReactDOM.findDOMNode(component)
  //  window.innerWidth
  //  window.innerHeight
}
  windowResize(){

console.log("bite")
}
  render() {

    return(
      <div className="Tooltip">
        <Icon id="interrogation" value="interrogation" tooltipGestion={this.updateTooltip}/>
        <div className="marge"></div>
        <Icon value="heart" tooltipGestion={this.updateTooltip}/>
        <Icon value="diamond" tooltipGestion={this.updateTooltip}/>
        <Icon value="clover" tooltipGestion={this.updateTooltip}/>
        <Icon value="spade" tooltipGestion={this.updateTooltip}/>
        <div className="marge"></div>
        <Icon value="2" tooltipGestion={this.updateTooltip}/>
        <Icon value="3" tooltipGestion={this.updateTooltip}/>
        <Icon value="4" tooltipGestion={this.updateTooltip}/>
        <Icon value="5" tooltipGestion={this.updateTooltip}/>
        <Icon value="6" tooltipGestion={this.updateTooltip}/>
        <Icon value="7" tooltipGestion={this.updateTooltip}/>
        <Icon value="8" tooltipGestion={this.updateTooltip}/>
        <Icon value="9" tooltipGestion={this.updateTooltip}/>
        <Icon value="10" tooltipGestion={this.updateTooltip}/>
        <Icon value="J" tooltipGestion={this.updateTooltip}/>
        <Icon value="Q" tooltipGestion={this.updateTooltip}/>
        <Icon value="K" tooltipGestion={this.updateTooltip}/>
        <Icon value="A" tooltipGestion={this.updateTooltip}/>
        <div className="marge"></div>
        <Icon value="cross" closeTooltip={this.props.closeTooltip}/>
      </div>
    )
  }
}

export default Tooltip
