export default class GameView {

constructor() {
 
}

updateBoard = (game) => {
  this.updateTurn(game)
  let victory = game.winner();
  let statusDisplay = document.querySelector(`.game--status`);
 

  if(victory){
  
    statusDisplay.innerHTML = "Player " + game.turn + " Won";
    
  }
  
    for(let i = 0; i< game.board.length;i++)
    {
      let tile = document.querySelector(`.one[data-index='${i}']`)
      let bord = document.querySelector(`.board`)
  
   tile.classList.remove("winner");
 
  let tiletype = game.board[i] === "X" ? "tile-x" : "tile-o"

  tile.innerHTML = `<span class="${tiletype}">${game.board[i] ? game.board[i] : ""}</span>`

  if(victory && victory.includes(i)){
    tile.classList.add("winner");   

  }

}

}

updateTurn = (game) => {

 let p_1 = document.querySelector(".player-1");
 let p_2 = document.querySelector(".player-2");

 p_1.classList.remove("active")
 p_2.classList.remove("active")

 if(game.turn === "X"){
   p_1.classList.add("active")
 }
else
 {
   p_2.classList.add("active");
 }

}

}
