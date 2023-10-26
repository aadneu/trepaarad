

function gridMaker(){
    let emptydiv = '';
    for (let i = 0; i < myArray.length; i++){
        emptydiv += `<div id='rute${myArray[i]}' class='box'></div>`
        
    }
    return emptydiv
}



function resetGame(){
    if(model.app.currentView = 'selectplayerscreen'){
    model.app.currentTeam = '';
    model.app.currentScore = 0
    }
    return;
}

function selectTeam(value){
    model.app.currentTeam = value
    viewApp();

}
