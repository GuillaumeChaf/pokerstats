import Calculation from './Calculation.js';

class TableCombination{

  constructor(combinationCard){

    const instanceCalculation = new Calculation();
    Object.freeze(instanceCalculation);

    this.combinationCard = combinationCard
    this.length = combinationCard.length
    this.straightFlush = instanceCalculation.combinations["straightFlush"].checkCombination(this.combinationCard)
    this.fourOfAKind = instanceCalculation.combinations["fourOfAKind"].checkCombination(this.combinationCard)
    this.fullHouse = instanceCalculation.combinations["fullHouse"].checkCombination(this.combinationCard)
    this.flush = instanceCalculation.combinations["flush"].checkCombination(this.combinationCard)
    this.straight = instanceCalculation.combinations["straight"].checkCombination(this.combinationCard)
    this.threeOfAKind = instanceCalculation.combinations["threeOfAKind"].checkCombination(this.combinationCard)
    this.twoPair = true
    this.pair = true
    this.highCard = true
  }
}

export default TableCombination
