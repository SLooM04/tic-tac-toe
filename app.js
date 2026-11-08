/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = "x";
let isGameOver = false;
let board = ["", "", "", "", "", "", "", "", ""];
let winner = null;

/*------------------------ Cached Element References ------------------------*/
const messageEl= document.querySelector('#message');
const sq0 =document.getElementById('0')
const sq1 =document.getElementById('1')
const sq2 =document.getElementById('2')
const sq3 =document.getElementById('3')
const sq4 =document.getElementById('4')
const sq5 =document.getElementById('5')
const sq6 =document.getElementById('6')
const sq7 =document.getElementById('7')
const sq8 =document.getElementById('8')
//const squares = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8];
/*-------------------------------- Functions --------------------------------*/
messageEl.textContent = `It's ${currentPlayer}'s turn!`;


/*----------------------------- Event Listeners -----------------------------*/

sq0.addEventListener('click',()=> {
  if (sq0.textContent !== ''|| isGameOver===true) {
    console.log('This square is already taken.')
    return;
  } else {
    sq0.textContent = currentPlayer;
    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';

    }
    messageEl.textContent = `It's ${currentPlayer}'s turn!`;

  }})
sq1.addEventListener('click',()=> {   if (sq1.textContent !== ''|| isGameOver===true) {
    console.log('This square is already taken.')
    return;
  } else {
    sq1.textContent = currentPlayer;
    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';
      
    }messageEl.textContent = `It's ${currentPlayer}'s turn!`;

  }})
sq2.addEventListener('click',()=> {  if (sq2.textContent !== ''|| isGameOver===true) {
    console.log('This square is already taken.')
    return;
  } else {
    sq2.textContent = currentPlayer;
    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';
      
    }messageEl.textContent = `It's ${currentPlayer}'s turn!`;

  }})
sq3.addEventListener('click',()=> {  if (sq3.textContent !== ''|| isGameOver===true) {
    console.log('This square is already taken.')
    return;
  } else {
    sq3.textContent = currentPlayer;
    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';
      
    }messageEl.textContent = `It's ${currentPlayer}'s turn!`;

  }})
sq4.addEventListener('click',()=> {  if (sq4.textContent !== ''|| isGameOver===true) {
    console.log('This square is already taken.')
    return;
  } else {
    sq4.textContent = currentPlayer;
    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';
      
    }messageEl.textContent = `It's ${currentPlayer}'s turn!`;

  }})
sq5.addEventListener('click',()=> {  if (sq5.textContent !== ''|| isGameOver===true) {
    console.log('This square is already taken.')
    return;
  } else {
    sq5.textContent = currentPlayer;
    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';
      
    }messageEl.textContent = `It's ${currentPlayer}'s turn!`;

  }})
sq6.addEventListener('click',()=> {  if (sq6.textContent !== ''|| isGameOver===true) {
    console.log('This square is already taken.')
    return;
  } else {
    sq6.textContent = currentPlayer;
    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';
      
    }messageEl.textContent = `It's ${currentPlayer}'s turn!`;

  }})
sq7.addEventListener('click',()=> {   if (sq7.textContent !== ''|| isGameOver===true) {
    console.log('This square is already taken.')
    return;
  } else {
    sq7.textContent = currentPlayer;
    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';
      
    }messageEl.textContent = `It's ${currentPlayer}'s turn!`;

  }})
sq8.addEventListener('click',()=> {   if (sq8.textContent !== ''|| isGameOver===true) {
    console.log('This square is already taken.')
    return;
  } else {
    sq8.textContent = currentPlayer;
    if (currentPlayer === 'x') {
      currentPlayer = 'o';
    } else {
      currentPlayer = 'x';
      
    }messageEl.textContent = `It's ${currentPlayer}'s turn!`;

  }})