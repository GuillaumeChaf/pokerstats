import Card from './Card.js';
import Calculation from './Calculation.js';
class Player{

  constructor(id){

    this.id = id;
    this.activate = false;
    this.card1 = new Card();
    this.card2 = new Card();
    this.finality = "win";
    this.finishCombination = "No matter";
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

    return instanceCalculation.scoreCalculation(new Card(this.card1.value,this.card1.symbol),new Card(this.card2.value,this.card2.symbol),cardCombination)
  }

  updateStats(scoreMax,secondScore,yourScore,scoreTable){

    const finishCombinationTable = []
    const final = this.finality
    const comb = this.finishCombination
    if(final === "win"){
      if(comb === "No matter"){
        if(yourScore > secondScore){this.trueStatistic++}
      }
      else{
        if(yourScore > secondScore && Math.floor(yourScore/10000000000) === finishCombinationTable[this.finishCombination]){this.trueStatistic++}
      }
    }
    else if(this.finality === "finish"){
      if(Math.floor(yourScore/10000000000) === finishCombinationTable[this.finishCombination] && yourScore !== scoreTable){this.trueStatistic++}
    }
    else if(final === "lose"){
      if(comb === "No matter"){
        if(yourScore < scoreMax){this.trueStatistic++}
      }
      else{
        if(yourScore < scoreMax && Math.floor(yourScore/10000000000) === finishCombinationTable[this.finishCombination]){this.trueStatistic++}
      }
    }
  }
}
export default Player;
