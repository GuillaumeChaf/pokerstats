import TwoCards from './TwoCards.js'

class Grid{

  constructor(scoreMax = 0){

    this.grid = []
    this.scoreMax = scoreMax
    this.allPossibilities = 0
  }

  /*
  Fonction destinée a créer la grille a partir de la liste des cartes en paramètre.
  Toutes les cases de la grille son créé avec des objets "TwoCards" représentant une paire et this.allPossibilities est calculé
  */
  getGrid(freeCards){

    for(let i = 0; i < freeCards.length; i++){
      let line = []
      for(let j = 0; j < freeCards.length; j++){
        if(i < j){
          line[freeCards[j].value + freeCards[j].symbol] = new TwoCards(freeCards[i],freeCards[j])
        }
        else if(i > j){
          line[freeCards[j].value + freeCards[j].symbol] = this.grid[freeCards[j].value + freeCards[j].symbol][freeCards[i].value + freeCards[i].symbol]
        }
      }
      this.grid[freeCards[i].value + freeCards[i].symbol] = line
    }
  }

  /*
  Fonction destinée a modifier la valeur "activ" de certaines paire à "false" pour indiquer qu'elle ont deja été utilisé
  Si un player est en paramètre, chaque modification lui fera gagner des points dans sa variable "trueStatistic"
  Si les paramètre contiennent une card1 et une card2, uniquement la paire contenant cette valeur sera modifié, sinon sans card2
  toute la ligne de card1 est modifié
  */
  updateGrid(player = false,card1,card2 = null){

    this.revalueCard(card1)
    this.revalueCard(card2)
    let index = card1.value + card1.symbol

    if(this.grid[index] === undefined){return}

    if(card2 === null){
      for(let card in this.grid[index]){
        let activ = this.grid[index][card].activ
        if(player && activ){player.trueStatistic++}
        this.grid[index][card].activ = false
      }
    }
    else{
      let index2 = card2.value + card2.symbol
      if(this.grid[index][index2] === undefined){return}

      let activ = this.grid[index][index2].activ
      if(player && activ){player.trueStatistic++}
      this.grid[index][index2].activ = false
    }
  }

  /*
  La grille de paire est reset, toute la valeur "activ" des paires revient a true, sauf pour les paires qui contiennent une carte dont la valeur
  est dans le tableau en paramètre. la variable allPossibilities est egalement recalculé
  */
  resetGrid(cardCombination){

    for(let line in this.grid){
      for(let twoCards in this.grid[line]){
        this.grid[line][twoCards].activ = true
      }
    }
    for(let card in cardCombination){
      this.updateGrid(false,cardCombination[card])
    }

    let totalCards = this.grid.length - cardCombination.length
    this.allPossibilities = (totalCards * totalCards - totalCards)/2
  }

  revalueCard(card){

    if(card === null){return}

    switch(card.value){
      case '14' : card.value = 'A'; break;
      case '1' : card.value = 'A'; break;
      case '13': card.value = 'K'; break;
      case '12': card.value = 'Q'; break;
      case '11': card.value = 'J'; break;
    }
  }
}

export default Grid
