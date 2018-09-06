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

  getScore(combinationCard){

    combinationCard = this.rankHigh(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)

    let firstCard = null
    let secondCard = null

    for(let i = 1; i < combinationCard.length; i++){
      if(parseInt(combinationCard[i].value) === parseInt(combinationCard[i - 1].value)){
        if(firstCard === null && i+1 < combinationCard.length && parseInt(combinationCard[i + 1].value) === parseInt(combinationCard[i].value)){
          firstCard = parseInt(combinationCard[i].value)
          i++
        }
        if(secondCard === null && firstCard !== parseInt(combinationCard[i].value)){
          secondCard = parseInt(combinationCard[i].value)
        }
        if(firstCard !== null && secondCard !== null){
          return 60000000000 + firstCard * 100000000 + secondCard * 1000000
        }
      }
    }
    return 0
  }

  count(){}
}


export default FullHouse
