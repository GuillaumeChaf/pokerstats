import Combination from './Combination.js';
import Card from './../Card.js';

class StraightFlush extends Combination{

  checkCombination(combinationCard){

    combinationCard = this.topSymbolSerie(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)
    if(combinationCard.length < 3){//cas ou il n'y a pas 3 carte de la meme couleur
      return false
    }
    if(combinationCard[0].value === "14"){//ajout de l'as en fin de suite pour l'unique cas de suite 5-4-3-2-A
      combinationCard.push(new Card("1",null))
    }
    for(let i = 0; i < combinationCard.length - 2; i++){
      if(parseInt(combinationCard[i + 1].value) > parseInt(combinationCard[i].value) - 5 &&
        parseInt(combinationCard[i + 2].value) > parseInt(combinationCard[i].value) - 5){//cas ou l'on trouve 3 cartes dans un espace de maximum 5 valeurs
          return true
      }
    }
    return false
  }

  getScore(combinationCard){

    combinationCard = this.topSymbolSerie(combinationCard)
    combinationCard = this.inverseCombinationToValue(combinationCard)
    if(combinationCard.length < 5){
      return 0;
    }
    if(combinationCard[0].value === "14"){//ajout de l'as en fin de suite pour l'unique cas de suite 5-4-3-2-A
      combinationCard.push(new Card("1",null))
    }
    for(let i = 0; i < combinationCard.length - 4; i++){
      if(parseInt(combinationCard[i].value) - 1 === parseInt(combinationCard[i + 1].value) &&
        parseInt(combinationCard[i].value) - 2 === parseInt(combinationCard[i + 2].value) &&
        parseInt(combinationCard[i].value) - 3 === parseInt(combinationCard[i + 3].value) &&
        parseInt(combinationCard[i].value) - 4 === parseInt(combinationCard[i + 4].value)){
        return 80000000000 + parseInt(combinationCard[i].value) * 100000000
      }
    }
    return 0
  }

  /*
  Fonction destinée a compter les outs winners pour chaque joueur en fonction de table(tableCombination)
  Pour comptabiliser on utilisera la grille en paramètre, en cas d'égalité, c'est la variable splitpot qui sera incrémentée
  */
  count(players,tableCombination,gridCard,splitPot){

    let playerCombination = []
    for(let player in players){
      let table = tableCombination.slice(0,tableCombination.length)
      table.push(players[player].card1)
      table.push(players[player].card2)
      table = this.topSymbolSerie(table)
      table = this.inverseCombinationToValue(table)
      if(table.length >= 3){
        let obj = {"player" : players[player],
                              "cards" : table}
        playerCombination.push(obj)
      }
    }

    for(let player in playerCombination){
      this.subCount(playerCombination[player],gridCard)
    }
  }

  /*
  si un joueur a montré les conditions nécéssaires pour pouvoir obtenir une quiintFlush, on lance cette fonction avec
  les cartes qui nous interessent(player.cards) la grille pour mettre a jour les combinaisons
  */
  subCount(player,gridCard){

    if(player.cards[0].value === "14"){//ajout de l'as en fin de suite pour l'unique cas de suite 5-4-3-2-A
      player.cards.push(new Card("1",player.cards[0].symbol))
    }
    let cardCount = 0;

    for(let i = 0; i < player.cards.length; i++){
      if(player.cards[i + 2] != undefined &&
      parseInt(player.cards[i + 1].value) > parseInt(player.cards[i].value) - 5 &&
      parseInt(player.cards[i + 2].value) > parseInt(player.cards[i].value) - 5){
        let pos1 = parseInt(player.cards[i].value) + 2

        this.countRes(cardCount,pos1    ,gridCard,player)
        this.countRes(cardCount,pos1 - 1,gridCard,player)
        this.countRes(cardCount,pos1 - 2,gridCard,player)
      }
      cardCount++
    }
  }

  /*
  Fonction destinée a mesurer si des quintFlush sont propables sur un intervalle de 5 carte, entre la valeur pos et la valeur pos -5
  Si le player obtient 3 cartes dans cette intervalle, il marquera des points et les combinaisons dans gridCard seront enlevées
  */
  countRes(cardCount,pos,gridCard,player){

    if(pos < 5){return}

    const symbol = player.cards[0].symbol
    let tab = []
    let count = 0
    debugger
    for(let i = 0; i < 5; i++){
      if(player.cards[cardCount + count] !== undefined && parseInt(player.cards[cardCount + count].value) === pos - i){
        count++
      }
      else{
        tab.push(new Card(pos - i,symbol))
      }
    }

    if(tab.length === 2){
      console.log(player.cards)
      console.log(tab[0])
      console.log(tab[1])
      console.log("------------------------------")
      gridCard.updateGrid(player.player,tab[0],tab[1])
    }
    else if(tab.length === 1){
      console.log(player.cards)
      console.log(tab[0])
      console.log("------------------------------")
      gridCard.updateGrid(player.player,tab[0])
    }
  }
}

export default StraightFlush
