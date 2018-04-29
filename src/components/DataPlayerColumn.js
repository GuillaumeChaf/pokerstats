import React, { Component } from 'react';
import "../style/DataPlayerColumn.css";
import PlayerFrame from "./PlayerFrame.js";

class DataPlayerColumn extends Component {
  render() {
    const getIdPlayer = (idToAdd) => { let base = Number.parseInt(this.props.first);
                                      if(base > 4){idToAdd = idToAdd*(-1)}
                                      return "" + (base + idToAdd)}

    return (
      <div className="dataPlayerColumn">
        <PlayerFrame number={getIdPlayer(0)}/>
        <PlayerFrame number={getIdPlayer(1)}/>
        <PlayerFrame number={getIdPlayer(2)}/>
        <PlayerFrame number={getIdPlayer(3)}/>
      </div>
    );
  }
}

export default DataPlayerColumn;
