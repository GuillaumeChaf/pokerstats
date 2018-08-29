import Calculation from './Calculation.js';

class TableCombination{

  constructor(combinationCard){

    const instanceCalculation = new Calculation();
    Object.freeze(instanceCalculation);

    this.combinationCard = combinationCard
    this.length = combinationCard.length
    this.straightFlush = instanceCalculation.combinations["straightFlush"].checkCombination(this.combinationCard.slice(0,this.combinationCard.length))
    this.fourOfAKind = instanceCalculation.combinations["fourOfAKind"].checkCombination(this.combinationCard.slice(0,this.combinationCard.length))
    this.fullHouse = instanceCalculation.combinations["fullHouse"].checkCombination(this.combinationCard.slice(0,this.combinationCard.length))
    this.flush = instanceCalculation.combinations["flush"].checkCombination(this.combinationCard.slice(0,this.combinationCard.length))
    this.straight = instanceCalculation.combinations["straight"].checkCombination(this.combinationCard.slice(0,this.combinationCard.length))
    this.threeOfAKind = true
    this.twoPair = true
    this.pair = true
    this.highCard = true
  }
}

export default TableCombination
