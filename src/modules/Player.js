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
    this.display = "";
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

    const finishCombinationTable = {"High Card" : 0,
                                    "One pair" : 1,
                                    "Two pair" : 2,
                                    "Trips" : 3,
                                    "Straight" : 4,
                                    "Flush" : 5,
                                    "Full" : 6,
                                    "Quads" : 7,
                                    "Straight Flush" : 8}
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

  calculPercentage(totalCombination){

    if(!this.activate){
      this.display = ""
    }
    else{
      let percentage = Math.round(this.trueStatistic/totalCombination * 100)
      if(percentage > 99 && percentage < 100){this.display = "> 99%"}
      else if(percentage < 1 && percentage > 0){this.display = "< 1%"}
      else{this.display = Math.round(percentage) + "%"}
    }
  }
}
export default Player;
