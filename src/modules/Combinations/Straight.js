import Combination from './Combination.js';
import Card from './../Card.js';

class Straight extends Combination{

  checkCombination(combinationCard){

    combinationCard = this.rankHighWithoutDouble(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)
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

  getScore(combinationCard){

    combinationCard = this.rankHighWithoutDouble(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)

    if(combinationCard.length < 5){
      return 0;
    }
    if(combinationCard[0].value === "14"){//ajout de l'as en fin de suite pour l'unique cas de suite 5-4-3-2-A
      combinationCard.push(new Card("1",null))
    }
    for(let i = 0; i < combinationCard.length - 4; i++){
      if(parseInt(combinationCard[i].value) - 1 === parseInt(combinationCard[i + 1].value) &&
        parseInt(combinationCard[i].value) - 2 === parseInt(combinationCard[i + 2].value) &&
        parseInt(combinationCard[i].value) - 3 === parseInt(combinationCard[i + 3].value) &&
        parseInt(combinationCard[i].value) - 4 === parseInt(combinationCard[i + 4].value)){
        return 40000000000 + parseInt(combinationCard[i].value) * 100000000
      }
    }
    return 0
  }
}


export default Straight
