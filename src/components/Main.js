import React from 'react';
import '../style/Main.css';
import Player from "./Player.js"
import Table from "./Table.js"
import SplitPot from "./SplitPot.js"
import background from '../pictures/table-spun.jpg'

const Main = () => (

    <div className="Main">
      <img className="background" src={background} alt="backgroundTable"/>
      <SplitPot />
      <Table />
      <Player number="1" positionX="105px" positionY="148px" />
      <Player number="2" positionX="17px" positionY="344px" />
      <Player number="3" positionX="105px" positionY="526px" />
      <Player number="4" positionX="279px" positionY="559px" />
      <Player number="5" positionX="489px" positionY="559px" />
      <Player number="6" positionX="672px" positionY="519px" />
      <Player number="7" positionX="741px" positionY="343px" />
      <Player number="8" positionX="646px" positionY="148px" />
    </div>
)

export default Main;
