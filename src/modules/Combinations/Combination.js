class Combination{

  rankHigh(combinationCard){//testé

    console.log(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)
    console.log(combinationCard)
    for(let i = 1; i < combinationCard.length; i++){
      let j = i;
      while(j > 0 && parseInt(combinationCard[j].value) > parseInt(combinationCard[j-1].value)){
        let copyCard = combinationCard[j-1];
        combinationCard[j-1] = combinationCard[j]
        combinationCard[j] = copyCard
        j--
      }
    }
    this.inverseCombinationToLetter(combinationCard)
    return combinationCard
  }

  rankHighWithoutDouble(combinationCard){//testé

    this.rankHigh(combinationCard)
    for(let i = 1; i < combinationCard.length; i++){
      if(combinationCard[i].value === combinationCard[i - 1].value){
        combinationCard.splice(i,1)
        i--;
      }
    }
    return combinationCard
}

  inverseValue(card){

    switch(card.value){
      case  'A' : card.value = '14'; break;
      case  'K' : card.value = '13'; break;
      case  'Q' : card.value = '12'; break;
      case  'J' : card.value = '11'; break;
      case  '14': card.value = 'A'; break;
      case  '13' : card.value = 'K'; break;
      case  '12' : card.value = 'Q'; break;
      case  '11' : card.value = 'J'; break;
    }
  }

  inverseCombinationToLetter(combinationCard){

    for(let card in combinationCard){
      if(parseInt(combinationCard[card].value) > 10){
        this.inverseValue(combinationCard[card])
      }
    }
    return combinationCard
  }

  inverseCombinationToValue(combinationCard){

    for(let card in combinationCard){
      if(!Number.isInteger(combinationCard[card].value)){
        this.inverseValue(combinationCard[card])
      }
    }
  return combinationCard
  }

  topSymbolSerie(combinationCard){//testé

    this.rankHigh(combinationCard)
    let serie = {"spade" : [], "clover" : [], "heart" : [], "diamond" : []}
    let topSymbol
    let top = 0
    for(let card in combinationCard){
      serie[combinationCard[card].symbol].push(combinationCard[card])
      if(serie[combinationCard[card].symbol].length > top){
        topSymbol = combinationCard[card].symbol
        top = serie[combinationCard[card].symbol].length
      }
    }
    return serie[topSymbol]
  }
}

export default Combination
