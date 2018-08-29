import HighCard from './Combinations/HighCard.js';
import Pair from './Combinations/Pair.js';
import TwoPair from './Combinations/TwoPair.js';
import ThreeOfAKind from './Combinations/ThreeOfAKind.js';
import Straight from './Combinations/Straight.js';
import Flush from './Combinations/Flush.js';
import FullHouse from './Combinations/FullHouse.js';
import FourOfAKind from './Combinations/FourOfAKind.js';
import StraightFlush from './Combinations/StraightFlush.js';

class Calculation {
  constructor(){
   if(! Calculation.instance){
      Calculation.instance = this;
      this.combinations = {
        straightFlush : new StraightFlush(),
        fourOfAKind : new FourOfAKind(),
        fullHouse : new FullHouse(),
        flush : new Flush(),
        straight : new Straight(),
        threeOfAKind : new ThreeOfAKind(),
        twoPair : new TwoPair(),
        pair : new Pair(),
        highCard : new HighCard()
      }
    }
    return Calculation.instance;
  }

  scoreCalculation(card1,card2,cardCombination){

    let score = 0
    let fullCombination = cardCombination.combinationCard.slice(0,cardCombination.combinationCard.length)
    if(card1 !== null){fullCombination.push(card1)}
    if(card2 !== null){fullCombination.push(card2)}

    for(let combination in this.combinations){
      if(cardCombination[combination]){
        score = this.combinations[combination].getScore(fullCombination.slice(0,fullCombination.length))
      }
      if(score > 0){break;}
    }
    return score;
  }
}

export default Calculation;
