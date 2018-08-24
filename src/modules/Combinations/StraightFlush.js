import Combination from './Combination.js';
import Card from './../Card.js';

class StraightFlush extends Combination{

  checkCombination(combinationCard){

    this.topSymbolSerie(combinationCard)
    this.inverseCombinationToValue(combinationCard)
    if(combinationCard.length < 3){//cas ou il n'y a pas 3 carte de la meme couleur
      return false
    }
    if(combinationCard[0].value === "14"){//ajout de l'as en fin de suite pour l'unique cas de suite 5-4-3-2-A
      combinationCard.push(new Card("1",null))
    }
    for(let i = 0; i < combinationCard.length - 2; i++){
      if(parseInt(combinationCard[i + 1].value) > parseInt(combinationCard[i].value) - 5 &&
        parseInt(combinationCard[i + 2].value) > parseInt(combinationCard[i].value) - 5){//cas ou l'on trouve 3 cartes dans un espace de maximum 5 valeurs
          return true
      }
    }
    return false
  }

  getScore(card1,card2,combinationCard){}
}

export default StraightFlush
