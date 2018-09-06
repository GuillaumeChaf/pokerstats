import Combination from './Combination.js';

class ThreeOfAKind extends Combination{

  checkCombination(combinationCard){

    return true;
}

  getScore(combinationCard){

    combinationCard = this.rankHigh(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)

    let counter = 1;
    let secondCard = null
    let thirdCard = null

    for(let i = 1; i < combinationCard.length; i++){
      if(parseInt(combinationCard[i].value) === parseInt(combinationCard[i - 1].value)){
        counter++
        if(counter === 3){
          if(secondCard === null){
            secondCard = parseInt(combinationCard[i + 1].value)
            thirdCard = parseInt(combinationCard[i + 2].value)
          }
          if(thirdCard === null){
            thirdCard = parseInt(combinationCard[i + 1].value)
          }
          return 30000000000 + parseInt(combinationCard[i].value) * 100000000 + secondCard * 1000000 + thirdCard * 10000
        }
      }
      else{
        if(thirdCard === null && secondCard !== null){
          thirdCard = parseInt(combinationCard[i - 1].value)
        }
        if(secondCard === null){
          secondCard = parseInt(combinationCard[i - 1].value)
        }
        counter = 1
      }
    }
    return 0
  }

  count(){}
}


export default ThreeOfAKind
