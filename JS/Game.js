export class Game {
  //Varible Declaration using Parametrised Constructor

  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }

  //For Player Turn

  nextTurn = () => {
    if (this.turn === "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  };

  makeMove = (i) => {
    if (this.endOfGame()) {
      return;
    }

    if (this.board[i]) {
      return;
    }
    this.board[i] = this.turn;
    let win = this.winner();  
    if(!win) {    
      this.nextTurn();
    } 
    else{
       let svgContainer = document.querySelector(`.svg`);

       const animation = bodymovin.loadAnimation({
         wrapper: svgContainer,
         path: "https://assets5.lottiefiles.com/packages/lf20_u4yrau.json",
         animType: "svg",
         loop: true,
         autoplay: false,
       });

         animation.play();
    }
  };
 

  winner = () => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
 let statusDisplay = document.querySelector(`.game--status`);
    for (const combo of combination) {
      const [a, b, c] = combo;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
         return combo;
      }
    }
    return null;
  };

  endOfGame = () => {
    let winning = this.winner();
    if (winning) {
      return true;
    } else {
      return false;
    }
  };
}