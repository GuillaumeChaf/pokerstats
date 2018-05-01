import React, { Component } from 'react';
import '../style/bootstrap.min.css';
import '../style/Icon.css';

class Icon extends Component{

  constructor(props){

    super(props);
    this.state = {
      value: this.props.value,
      selected: "notSelected"
    }
    this.clickIcon = this.clickIcon.bind(this);
  }

  getContent(){
    let content;
    let picture;

    const value = this.state.value
    //cas des symboles (heart diamond spade clover)
    if(isNaN(value) && value.length > 1 && value !== "interrogation"){
      picture = require('../pictures/' + value + '.png');
      content =  <img src={picture} id='icon_img' alt='Icon' />
    }
    //cas de toutes les valeurs de entre 2 et A
    else if(!isNaN(value) || value.length === 1){
      content = <h2 className="iconContent"> {value} </h2>
    }
    //cas d'interrogation
    else{
      picture = require('../pictures/interrogation.png');
      content =  <img src={picture} id='icon_img' alt='Icon' />
    }
    return content;
  }

  clickIcon(){

    const select = this.state.selected

    if(this.state.value === "cross"){this.props.closeTooltip(); return}

    if(select === "notSelected"){
      this.setState({selected: "selected"})
    }
    else if(select === "selected"){
      this.setState({selected: "notSelected"})
    }
    this.props.tooltipGestion(this)
  }

  render(){

    const classButton = "TooltipIcon " + this.state.selected
    return (
      <button id="icon_component" className={this.state.selected} onClick = {this.clickIcon} >
        {this.getContent()}
      </button>
    )
  }
}

export default Icon;
