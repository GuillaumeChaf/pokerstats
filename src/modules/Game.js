import Player from './Player.js';
import Table from './Table.js';
import Card from './Card.js';
import TableCombination from './TableCombination.js';

class Game{

  constructor(){

     this.players = {1 : new Player(1),
                      2 : new Player(2),
                      3 : new Player(3),
                      4 : new Player(4),
                      5 : new Player(5),
                      6 : new Player(6),
                      7 : new Player(7),
                      8 : new Player(8)}

    this.table = new Table();
    this.splitPot = 0;
    this.activPlayers = [];
    this.testloop = 0;
  }

  calculStat(){

    const cards = this.freeCardPicker();
    this.scoreReinitialisation();
    this.activPlayers = this.playerPicker();

    this.loopRecursion(cards,[],0)

  }

  loopRecursion(allFreeCards,cardCombination,numberCurrentLoop){

    if(numberCurrentLoop === 1/*parseInt(this.table.numberActivateCard)*/){
      //this.testloop++;
      let scoreTable = {}
      let tableCombination = new TableCombination(cardCombination)

      for(let player in this.activPlayers){
        scoreTable[this.activPlayers[player].id] = this.activPlayers[player].getScore(tableCombination)
      }
      this.updateWinningNumber(scoreTable);
    }
    else{
      const card = this.table.cardsTable[numberCurrentLoop + 1]
      if(card.value === null){

        while(allFreeCards.length > 0){
          const loopCard = allFreeCards[0]

          let newCardCombination = cardCombination.slice(0,cardCombination.length);
          newCardCombination.push(loopCard)

          allFreeCards = this.removeCard(allFreeCards,loopCard)
          this.loopRecursion(allFreeCards,newCardCombination,numberCurrentLoop +1)

        }
      }
      else{
        let newCardCombination = cardCombination.slice(0,cardCombination.length);
        newCardCombination.push(card)
        this.loopRecursion(allFreeCards,newCardCombination,numberCurrentLoop +1)
    }
  }

}

  scoreReinitialisation(){

    for(let player in this.players){
      this.players[player].trueStatistic = 0;
    }
    this.testloop = 0;
    this.splitpot = 0;
  }
  freeCardPicker(){

    let allCards = [new Card("2","diamond"),new Card("3","diamond"), new Card("4","diamond"), new Card("5","diamond"),
                    new Card("6","diamond"),new Card("7","diamond"), new Card("8","diamond"), new Card("9","diamond"),
                    new Card("10","diamond"),new Card("J","diamond"), new Card("Q","diamond"), new Card("K","diamond"),new Card("A","diamond"),
                    new Card("2","clover"),new Card("3","clover"), new Card("4","clover"), new Card("5","clover"),
                    new Card("6","clover"),new Card("7","clover"), new Card("8","clover"), new Card("9","clover"),
                    new Card("10","clover"),new Card("J","clover"), new Card("Q","clover"), new Card("K","clover"),new Card("A","clover"),
                    new Card("2","heart"),new Card("3","heart"), new Card("4","heart"), new Card("5","heart"),
                    new Card("6","heart"),new Card("7","heart"), new Card("8","heart"), new Card("9","heart"),
                    new Card("10","heart"),new Card("J","heart"), new Card("Q","heart"), new Card("K","heart"),new Card("A","heart"),
                    new Card("2","spade"),new Card("3","spade"), new Card("4","spade"), new Card("5","spade"),
                    new Card("6","spade"),new Card("7","spade"), new Card("8","spade"), new Card("9","spade"),
                    new Card("10","spade"),new Card("J","spade"), new Card("Q","spade"), new Card("K","spade"),new Card("A","spade")];

    for(let player in this.players){
      allCards = this.removeCard(allCards,this.players[player].card1)
      allCards = this.removeCard(allCards,this.players[player].card2)
    }

    for(let Card in this.table.cardsTable){
      allCards = this.removeCard(allCards,this.table.cardsTable[Card])
    }

    return allCards;
  }

  removeCard(cardTable, card){

    let copyTable = cardTable.slice(0,cardTable.length);
    let index = copyTable.findIndex(element => element.value === card.value && element.symbol === card.symbol)

    if(index !== -1){
      copyTable.splice(index,1)
    }

    return copyTable
  }

  playerPicker(){

    let result = [];
    for(let player in this.players){
      if(this.players[player].activate){
        result.push(this.players[player]);
      }
    }
    return result;
  }

  updateWinningNumber(){

}
}
export default Game;