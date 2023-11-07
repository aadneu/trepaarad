
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
  } model.app.teams
  if(model.app.currentTeam === model.app.teams[0]){
    model.app.opposingTeam =model.app.teams[1]
  } else if (model.app.currentTeam === model.app.teams[1]){
    model.app.opposingTeam = model.app.teams[0]
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
  if(model.app.gameBoard[index].rute === '') {
  model.app.gameBoard[index].rute = model.app.currentTeam;
  computerMove();
  checkWinner()
  viewApp();
  } else return
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
  const gameBoard = model.app.gameBoard
  const waysToWin = [
    [0,1,2],[3,4,5],[6,7,8]
    [0,3,6],[1,4,7],[2,5,8]
    [0,4,8],[2,4,6]
  ]
 for(let i = 0; 0 < waysToWin.length; i++){
  const [a,b,c] = waysToWin[i]
  if(gameBoard[a].rute !== '' && gameBoard[a].rute === gameBoard[b].rute && gameBoard[a].rute === gameBoard[c].rute){
    return model.app.myScore++
  }
 }

  
}

function randomizer(){
   let randomNumber = Math.floor(Math.random() * 9 )
    return randomNumber;
}



 




// function assignWinner(){
//   if 
// }

