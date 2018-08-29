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
    this.freeCards = []
  }

  calculStat(){

    this.freeCards = this.freeCardPicker();
    console.log(this.freeCards)
    this.scoreReinitialisation();
    this.activPlayers = this.playerPicker();

    this.loopRecursion(this.freeCards,[],0)

    for(let player in this.activPlayers){
      console.log(this.activPlayers[player].id + " : " + this.activPlayers[player].trueStatistic)
    }
    console.log("Total : " + this.calculTotalCombinationNumber())
  }

  loopRecursion(allFreeCards,cardCombination,numberCurrentLoop){


    if(numberCurrentLoop === 3/*parseInt(this.table.numberActivateCard)*/){

      let scoreTable = {}
      let tableCombination = new TableCombination(cardCombination)

      for(let player in this.activPlayers){
        scoreTable[this.activPlayers[player].id] = this.activPlayers[player].getScore(tableCombination)
      }

      let table = tableCombination.getScore()
      this.updateWinningNumber(scoreTable,table);
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
    this.splitpot = 0;
  }
  freeCardPicker(){

    debugger
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

    debugger
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

  updateWinningNumber(scoreTable,table){

    let scoreMax = 0
    let secondScore = 0

    for(let player in scoreTable){
      if(scoreTable[player] > scoreMax){
        secondScore = scoreMax
        scoreMax = scoreTable[player]
      }
      else if(scoreTable[player] > secondScore){
        secondScore = scoreTable[player]
      }
    }
    for(let player in scoreTable){
      this.players[player].updateStats(scoreMax,secondScore,scoreTable[player],table)
    }
  }

  calculTotalCombinationNumber(){

    let numberCards = this.freeCards.length
    let loops = this.table.numberActivateCard

    let totalCombi = 1
    let dividend = 1

    while(loops > 0){
      totalCombi *= numberCards
      dividend *= loops
      loops--
      numberCards--
    }
    console.log(totalCombi)
    console.log(dividend)
    return totalCombi / dividend
  }
}
export default Game;
