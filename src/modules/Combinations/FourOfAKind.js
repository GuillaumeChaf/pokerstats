import Combination from './Combination.js';

class FourOfAKind extends Combination{

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

    let counter = 1;
    let secondCard = null

    for(let i = 1; i < combinationCard.length; i++){
      if(parseInt(combinationCard[i].value) === parseInt(combinationCard[i - 1].value)){
        counter++
        if(counter === 4){
          if(secondCard === null){
            secondCard = parseInt(combinationCard[i + 1].value)
          }
          return 70000000000 + parseInt(combinationCard[i].value) * 100000000 + secondCard * 1000000
        }
      }
      else{
        if(secondCard === null){
          secondCard = parseInt(combinationCard[i - 1].value)
        }
        counter = 1
      }
    }
    return 0
  }
}


export default FourOfAKind
