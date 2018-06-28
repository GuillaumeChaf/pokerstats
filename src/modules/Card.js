class Card{

  constructor(value = null, symbol = null){

     this.value = value;
     this.symbol = symbol;
  }

  resetCard(value,symbol){

    this.value = value;
    this.symbol = symbol;
  }

  equals(card){

    return card.value == this.value && card.symbol == this.symbol;
  }
}
export default Card;
