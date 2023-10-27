function gridMaker() {
  let emptydiv = "";
  for (let i = 0; i < myArray.length; i++) {
    emptydiv += `<div onclick='velgRute(this)' id='rute${myArray[i]}' class='box'></div>`;
  }
  return emptydiv;
}

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

function velgRute(clickedElement){
    if (clickedElement.innerHTML === ''){
        clickedElement.innerHTML = model.app.currentTeam
    } 
}


function randomizer(){
   let randomNumber = Math.floor(Math.random() * (9 - 1 + 1 )) + 1
    return randomNumber;
}



