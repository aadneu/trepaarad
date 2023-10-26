viewApp();
function viewApp(){
    let html = /*html*/`
    <h1>3 PÅ RAD</h1>
    <div class='spillebrett'>
        <div>${pageView()}</div>
        <div>
            <div><h2>Team: ${model.app.currentTeam}</h2></div>
            <div><h2>Score:</h2></div>
            <div></div>
            <div></div>
        </div>
    </div>
    
    `;
    app.innerHTML = html
}

function pageView(){
    let html =``;
    if (model.app.currentView == 'selectplayerscreen') {
        html += selectPlayerScreen();
    } else if (model.app.currentView == 'ingamescreen') {
        html += gameView();
    }
    return html
}

function listTeams(){
    let teamlist = '';
    for(let i = 0; i < model.app.teams.length; i++){
        teamlist += `<div><h2 onclick='selectTeam("${model.app.teams[i]}")'>${model.app.teams[i]}</h2></div>`;
    }
    return teamlist
}

function selectPlayerScreen(){
    let html = /*html*/`
    <h2>Choose wisely</h2>
    <div>${listTeams()}</div>
    <br><br><br>
    <button onclick='changeView("ingamescreen")'>Start spill</button>
    `;
    return html;
}

function gameView(){
    let html = /*html*/`
    <div class='grid'>${gridMaker()}</div>
    <br>
    <button onclick='changeView("selectplayerscreen")'>Avslutt spill</button>
    `;
    return html
}

function changeView(pagename){
    model.app.currentView = pagename
    viewApp();

}