
function startGame() {
  if (!model.app.hasChosenTeam) {
    model.app.displaymessage = "Velg ett lag!";
  } else {
    changeView("ingamescreen");
  }
  viewApp();
}

function resetGame() {
  changeView("selectplayerscreen");
  model.app.currentTeam = "";
  model.app.opposingTeam = "";
  model.app.myScore = 0;
  model.app.opponentScore = 0;
  model.app.displaymessage = "";
  model.app.hasChosenTeam = false;
  viewApp();
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
    viewApp();
}

function computerMove(){
  let ledigrute = createRandomRute() 
  if (ledigrute.style.backgroundColor){
    computerMove()
  } else {
    ledigrute.style.backgroundColor = model.app.opposingTeam
  }
}

function randomizer(){
   let randomNumber = Math.floor(Math.random() * (9 - 1 + 1 )) + 1
    return randomNumber;
}

function createRandomRute(){
  let randomrute = document.getElementById(`rute${randomizer()}`)
  return randomrute;
}

 




// function assignWinner(){
//   if 
// }

