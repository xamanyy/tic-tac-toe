import {Game} from './Game.js'
import GameView from './GameView.js'

let game = new Game();
let gameView = new GameView();

document.querySelector(".button").addEventListener('click',()=>{

newGame();
})

let tiles = document.querySelectorAll('.one');
tiles.forEach((tile) => {
  tile.addEventListener('click', ()=>{
  onTileClicked(tile.dataset.index)
  })
    
  })


 let onTileClicked = (i) => {
   game.makeMove(i);
   gameView.updateBoard(game);
  }

 const  newGame = () =>{
location.reload();
  }

gameView.updateBoard(game);