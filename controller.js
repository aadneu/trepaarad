function startGame() {
  if (!model.app.hasChosenTeam) {
    model.app.displaymessage = "Velg ett lag!";
  } else {
    changeView("ingamescreen");
  }
  viewApp();
}

function resetGame() {
  location.reload();
}

function selectTeam(value) {
  model.app.currentTeam = value;
  if (model.app.currentTeam != "") {
    model.app.hasChosenTeam = true;
  }
  if (model.app.currentTeam === model.app.teams[0]) {
    model.app.opposingTeam = model.app.teams[1];
  } else if (model.app.currentTeam === model.app.teams[1]) {
    model.app.opposingTeam = model.app.teams[0];
  }
  viewApp();
}

function gridMaker() {
  let grid = "";
  for (let i = 0; i < model.app.gameBoard.length; i++) {
    grid += `<div onclick='velgRute(${[i]})' class='box'>${
      model.app.gameBoard[i].rute
    }</div>`;
  }
  reloadGrid();
  return grid;
}

function velgRute(index) {
  if (model.app.gameBoard[index].rute === "") {
    model.app.gameBoard[index].rute = model.app.currentTeam;
    computerMove();
    checkWinner();
    reloadGrid();
    viewApp();
  } else return;
}

function computerMove() {
  let index = randomizer();
  let ledigrute = model.app.gameBoard[index].rute;
  if (ledigrute === "") {
    model.app.gameBoard[index].rute = model.app.opposingTeam;
    viewApp();
  } else {
    computerMove();
  }
}

function winScreen(){
  if(model.app.opponentScore > 5){
    changeView('gameoverscreen')
  } else if (model.app.myScore > 5){
    changeView('winscreen')
   
  }
  
}

function reloadGrid(){
 const prevMyScore = model.app.prevMyScore
 const prevAiScore = model.app.prevAiScore
  if (model.app.myScore !== prevMyScore || model.app.opponentScore !== prevAiScore){
    model.app.prevMyScore = model.app.myScore
    model.app.prevAiScore = model.app.opponentScore

    model.app.gameBoard.forEach((element) => {
      element.rute = ''
    })
    }
  }


function checkWinner() {
  const gameBoard = model.app.gameBoard;
  const waysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < waysToWin.length; i++) {
    const [a, b, c] = waysToWin[i];
    if (
      gameBoard[a].rute === model.app.currentTeam &&
      gameBoard[a].rute === gameBoard[b].rute &&
      gameBoard[a].rute === gameBoard[c].rute
    ) {
      model.app.myScore++
      return model.app.myScore;
    } else if (
      gameBoard[a].rute === model.app.opposingTeam &&
      gameBoard[a].rute === gameBoard[b].rute &&
      gameBoard[a].rute === gameBoard[c].rute
    ) {
      model.app.opponentScore++
      return model.app.opponentScore;
    }
  }
}

function randomizer() {
  let randomNumber = Math.floor(Math.random() * 9);
  return randomNumber;
}

// function assignWinner(){
//   if
// }
