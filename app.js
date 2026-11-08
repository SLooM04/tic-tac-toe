/*-------------------------------- Constants --------------------------------*/
const winningGroups = [ [0, 1, 2],[3, 4, 5],[6, 7, 8],  [0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6] ]


/*---------------------------- Variables (state) ----------------------------*/
let player1 = "X";
let player2 = "O";
let turn = player1;
let winner = null;
let board = ["", "", "", "", "", "", "", "", ""];


/*------------------------ Cached Element References ------------------------*/
const message =document.getElementById("message")

const sq0 = document.getElementById("0");
const sq1 = document.getElementById("1");
const sq2 = document.getElementById("2");
const sq3 = document.getElementById("3");
const sq4 = document.getElementById("4");
const sq5 = document.getElementById("5");
const sq6 = document.getElementById("6");
const sq7 = document.getElementById("7");
const sq8 = document.getElementById("8");
const squares = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8];
const resetBtn = document.getElementById("reset");


/*-------------------------------- Functions --------------------------------*/
function init() {
  board = ["", "", "",
           "", "", "",
            "", "", ""]
    turn = player1;
    winner = null;
   render()
  }

function clicks(idx) {
  if (board[idx] !== "" || winner !== null) return;

  board[idx] = turn;

  winnerCecker();
  checkTie();

  if (winner === null) {
    if (turn === player1) {
      turn = player2;
    } else {
      turn = player1;
    }
  }

  render();
}


  function render() {
    board.forEach(function(sqr, idx) {
      squares[idx].textContent = sqr
    })
   if (winner === null) {
    message.textContent = `Player ${turn}'s turn`;
   }else if (winner === "tie") {
    message.textContent = `It's a tie!`;
   }
   else if (winner !== null) {
    message.textContent = `Player ${winner} wins!`;
   }
  }



function winnerCecker() {
    winningGroups.forEach((w) => {
     if (
      board[w[0]] !== "" && board[w[0]] === board[w[1]] && board[w[0]] === board[w[2]]) {
      winner = board[w[0]];
     //   message.textContent = `Player ${winner} wins!`;
    }
  });
}
function checkTie() {
  let count = 0;
  board.forEach((sq) => {
    if (sq !== "") {
      count = count + 1;
    }
  });

  if (count === 9 && winner === null) {
    winner = "tie";
  }
}




/*----------------------------- Event Listeners -----------------------------*/
sq0.addEventListener("click", () => clicks(0))
sq1.addEventListener("click", () => clicks(1))
sq2.addEventListener("click", () => clicks(2))
sq3.addEventListener("click", () => clicks(3))
sq4.addEventListener("click", () => clicks(4))
sq5.addEventListener("click", () => clicks(5))
sq6.addEventListener("click", () => clicks(6))
sq7.addEventListener("click", () => clicks(7))
sq8.addEventListener("click", () => clicks(8))
resetBtn.addEventListener("click", init)
init()
