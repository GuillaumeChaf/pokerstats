import Card from './Card.js';

class Player{

  constructor(){

    this.activate = false;
    this.card1 = new Card();
    this.card2 = new Card();
    this.finality = "win";
    this.finishCombinaison = null;
  }

  inverseActivation(){

    let activ = this.activate;
    if(activ){
      this.activate = false;
    }
    else{
      this.activate = true;
    }
  }
}
export default Player;
