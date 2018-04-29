import React, { Component } from 'react';
import '../style/bootstrap.min.css';
import '../style/Icon.css';

class Icon extends Component{

  constructor(props){

    super(props);
    this.state = {
      value: this.props.value,
      selected: "TooltipIcon notSelected"
    }
    this.clickIcon = this.clickIcon.bind(this);
  }

  getContent(){
    let content;
    let picture;

    if(isNaN(this.state.value) && parseInt(this.state.value) !== "interrogation"){
      picture = require('../pictures/' + this.state.value + '.png');
      content =  <img src={picture} id='icon_img' alt='Icon' />
    }
    else if(!isNaN(this.state.value) && parseInt(this.state.value) > 0 && parseInt(this.state.value) <= 14){
      content = <p> {this.state.value} </p>
    }
    else{
      picture = require('../pictures/interrogation.png');
      content =  <img src={picture} id='icon_img' alt='Icon' />
    }
    return content;
  }

  clickIcon(){

    const select = this.state.selected
    if(select === "TooltipIcon notSelected"){
      this.setState({selected: "TooltipIcon Selected"})
    }
    else if(select === "TooltipIcon Selected"){
      this.setState({selected: "TooltipIcon notSelected"})
    }
    this.props.tooltipGestion(this)
  }

  render(){
    //if(this.state.value == "spade" || this.state.value == "4" )
    //console.log(this)
    return (
      <button id="icon_component" className={this.state.selected} onClick = {this.clickIcon} >
        {this.getContent()}
      </button>
    )
  }
}

export default Icon;
