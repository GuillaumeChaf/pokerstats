import Combination from './Combination.js';

class FullHouse extends Combination{

  checkCombination(combinationCard){

    combinationCard = this.rankHigh(combinationCard)
    for(let i = 1; i < combinationCard.length; i++){
      if(combinationCard[i].value === combinationCard[i-1].value){
        return true
      }
    }
    return false
  }

  getScore(card1,card2,combinationCard){}
}


export default FullHouse
