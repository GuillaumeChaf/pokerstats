import Combination from './Combination.js';

class Pair extends Combination{

  checkCombination(combinationCard){

    return true;
}

  getScore(combinationCard){

    combinationCard = this.rankHigh(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)

    let pair = null
    let otherCards = []
    for(let i = 0; i < combinationCard.length; i++){
      if(i < combinationCard.length - 1 && parseInt(combinationCard[i].value) === parseInt(combinationCard[i + 1].value) && pair === null){
        pair = parseInt(combinationCard[i].value)
        i++
      }
      else{
        otherCards.push(parseInt(combinationCard[i].value))
      }
      if(pair !== null && otherCards.length >= 3){
        return 10000000000 + pair * 100000000 + otherCards[0] * 1000000 + otherCards[1] * 10000 + otherCards[2] * 100
      }
    }
    return 0
  }
}


export default Pair
