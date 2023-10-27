function gridMaker(){
    let emptydiv = '';
    for (let i = 0; i < myArray.length; i++){
        emptydiv += `<div id='rute${myArray[i]}' class='box'></div>`
        
    }
    return emptydiv
}

function startGame(){
    if(!model.app.hasChosenTeam){
        model.app.displaymessage = 'Velg ett lag!'
        } else { changeView("ingamescreen")
    }
    viewApp();
}

function resetGame(){
    changeView('selectplayerscreen')
    model.app.currentTeam = '';
    model.app.opposingTeam = '';
    model.app.myScore = 0
    model.app.opponentScore = 0
    model.app.displaymessage = '';
    model.app.hasChosenTeam = false
    viewApp();    
}




function selectTeam(value){
    model.app.currentTeam = value
 if(model.app.currentTeam != ''){
    model.app.hasChosenTeam = true
 }
    
    viewApp();

}
