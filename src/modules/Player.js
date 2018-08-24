import Card from './Card.js';
import Calculation from './Calculation.js';
class Player{

  constructor(id){

    this.id = id;
    this.activate = false;
    this.card1 = new Card();
    this.card2 = new Card();
    this.finality = "win";
    this.finishCombination = null;
    this.trueStatistic = 0;
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

  getScore(cardCombination){

    const instanceCalculation = new Calculation();
    Object.freeze(instanceCalculation);
    console.log(instanceCalculation.scoreCalculation(this.card1,this.card2,cardCombination))

    //return instanceCalculation.scoreCalculation(this.card1,this.card2,cardCombination)
  }

  newPositiveSituation(){

}
}
export default Player;
