import Player from './Player.js';
import Table from './Table.js';

class Game{

  constructor(){

     this.players = {1 : new Player(),
                      2 : new Player(),
                      3 : new Player(),
                      4 : new Player(),
                      5 : new Player(),
                      6 : new Player(),
                      7 : new Player(),
                      8 : new Player()}

   this.table = new Table();
  }
}
export default Game;
