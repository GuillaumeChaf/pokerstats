import Combination from './Combination.js';

class Flush extends Combination{

  checkCombination(combinationCard){

    this.topSymbolSerie(combinationCard)
    if(combinationCard.length >= 3){//cas ou il y a au moins 3 cartes de la meme couleur
      return true
    }
    return false
  }

  getScore(card1,card2,combinationCard){}
}


export default Flush
