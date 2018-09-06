import Combination from './Combination.js';

class TwoPair extends Combination{

  checkCombination(combinationCard){

    return true;
}

  getScore(combinationCard){

    combinationCard = this.rankHigh(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)

    let firstPair = null
    let secondPair = null
    let soloCard = null

    for(let i = 0; i < combinationCard.length; i++){
      if(i < combinationCard.length - 1 && parseInt(combinationCard[i].value) === parseInt(combinationCard[i + 1].value)){
        if(secondPair === null && firstPair !== null){
          secondPair = parseInt(combinationCard[i].value)
          i++
        }
        if(firstPair === null){
          firstPair = parseInt(combinationCard[i].value)
          i++
        }
      }
      else{
        if(soloCard === null){
          soloCard = parseInt(combinationCard[i].value)
        }
      }
      if(firstPair !== null && secondPair !== null && soloCard !== null){
        return 20000000000 + firstPair * 100000000 + secondPair * 1000000 + soloCard * 10000
      }
    }
    return 0
  }

  count(){}
}


export default TwoPair
