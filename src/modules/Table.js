import Card from './Card.js';

class Table{

  constructor(){

     this.numberActivateCard = 5;
     this.cardsTable = {1 : new Card(),
                        2 : new Card(),
                        3 : new Card(),
                        4 : new Card(),
                        5 : new Card()
                      };
  }
}
export default Table;
