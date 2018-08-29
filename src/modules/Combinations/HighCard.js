import Combination from './Combination.js';

class HighCard extends Combination{

  checkCombination(combinationCard){

    return true;
}

  getScore(combinationCard){

    combinationCard = this.rankHigh(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)

    return parseInt(combinationCard[0].value) * 100000000 +
            parseInt(combinationCard[1].value) * 1000000 +
            parseInt(combinationCard[2].value) * 10000 +
            parseInt(combinationCard[3].value) * 100 +
            parseInt(combinationCard[4].value)
    }
}

export default HighCard
