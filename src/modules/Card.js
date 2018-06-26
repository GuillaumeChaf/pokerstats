class Card{

  constructor(){

     this.value = null;
     this.symbol = null;
  }

  resetCard(symbol,value){

    this.value = value;
    this.symbol = symbol;
  }
}
export default Card;
