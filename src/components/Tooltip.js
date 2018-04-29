import React, { Component } from 'react';
import Icon from './Icon.js';
import '../style/bootstrap.min.css';
import '../style/Tooltip.css';

class Tooltip extends Component{

  constructor(props){
    super(props);
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

    let iconValue = this.state.valueSelected
    let iconSymbol = this.state.symbolSelected
    if(iconValue !== "none" && iconSymbol !== "none"){
      this.props.updateValueCard(iconValue.state.value,iconSymbol.state.value)
    }
  }

  setNewStates(icon){

    let iconValue = icon.state.value
    if(isNaN(parseInt(iconValue))){
      if(icon === this.state.symbolSelected){
        this.state.symbolSelected.setState({selected: "TooltipIcon notSelected"})
        this.setState({symbolSelected:"none"})
      }
      else{
        if(this.state.symbolSelected !== "none"){
          this.state.symbolSelected.setState({selected: "TooltipIcon notSelected"})
        }
        this.setState({symbolSelected:icon})
      }
    }
    else{
      if(icon === this.state.valueSelected){
        this.state.valueSelected.setState({selected: "TooltipIcon notSelected"})
        this.setState({valueSelected:"none"})
      }
      else{
        if(this.state.valueSelected !== "none"){
          this.state.valueSelected.setState({selected: "TooltipIcon notSelected"})
        }
        this.setState({valueSelected:icon})
      }
    }
  }

  render() {

    return(
      <div className="Tooltip">
        <Icon id="interrogation" value="" tooltipGestion={this.updateTooltip}/>
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
        <Icon value="11" tooltipGestion={this.updateTooltip}/>
        <Icon value="12" tooltipGestion={this.updateTooltip}/>
        <Icon value="13" tooltipGestion={this.updateTooltip}/>
        <Icon value="14" tooltipGestion={this.updateTooltip}/>
      </div>
    )
  }
}

export default Tooltip
