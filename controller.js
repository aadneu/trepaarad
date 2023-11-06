
function startGame() {
  if (!model.app.hasChosenTeam) {
    model.app.displaymessage = "Velg ett lag!";
  } else {
    changeView("ingamescreen");
  }
  viewApp();
}

function resetGame() {
location.reload()

  
}

function selectTeam(value) {
  model.app.currentTeam = value;
  if (model.app.currentTeam != "") {
    model.app.hasChosenTeam = true;
  }
  if(model.app.currentTeam === 'Red'){
    model.app.opposingTeam = 'Blue'
  } else if (model.app.currentTeam === 'Blue'){
    model.app.opposingTeam = 'Red'
  }
  
  viewApp();
}
function gridMaker() {
  let grid = "";
  for (let i = 0; i < model.app.gameBoard.length; i++) {
    grid += `<div onclick='velgRute(${[i]})' class='box'>${model.app.gameBoard[i].rute}</div>`;
  }
  return grid;
}

function velgRute(index){
  if(model.app.gameBoard[index].rute === '')   
  model.app.gameBoard[index].rute = model.app.currentTeam;
  computerMove()
  viewApp();
}

function computerMove(){
  let index = randomizer();
  let ledigrute = model.app.gameBoard[index].rute
  if (ledigrute === ''){
    model.app.gameBoard[index].rute = model.app.opposingTeam;
    viewApp();
    
  } else {
    computerMove();
  }
}

function checkWinner(){
  let gridNr = model.app.gameboard
  if (gridNr[0].rute === gridNr[1].rute && gridNr[2].rute === gridNr[1].rute){
    console.log('tre på rad')

  }
}

function randomizer(){
   let randomNumber = Math.floor(Math.random() * (9 - 1 + 1 )) + 1
    return randomNumber;
}



 




// function assignWinner(){
//   if 
// }

