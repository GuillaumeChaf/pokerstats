import Combination from './Combination.js';

class Flush extends Combination{

  checkCombination(combinationCard){

    combinationCard = this.topSymbolSerie(combinationCard)
    if(combinationCard.length >= 3){//cas ou il y a au moins 3 cartes de la meme couleur
      return true
    }
    return false
  }

  getScore(combinationCard){

    combinationCard = this.topSymbolSerie(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)

    if(combinationCard.length < 5){
      return 0;
    }
    let score = 50000000000
    score += parseInt(combinationCard[0].value) * 100000000
    score += parseInt(combinationCard[1].value) * 1000000
    score += parseInt(combinationCard[2].value) * 10000
    score += parseInt(combinationCard[3].value) * 100
    score += parseInt(combinationCard[4].value)
    return score
  }

  count(){}
}


export default Flush
