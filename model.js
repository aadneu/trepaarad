let app = document.getElementById('app')
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


model = {
    app: {
        pages: [
            "selectplayerscreen",
            "ingamescreen",
            "winscreen",
            "gameoverscreen",
        ],
        currentView: 'selectplayerscreen',
        currentTeam: '',
        opposingTeam: '',
        myScore: 0,
        opponentScore: 0,
        teams:['Red','Blue'],
        hasChosenTeam: false,
        displaymessage: '',
        gameBoard: [
            {rute: ''},
            {rute: ''},
            {rute: ''},
            {rute: ''},
            {rute: ''},
            {rute: ''},
            {rute: ''},
            {rute: ''},
            {rute: ''},
    ]
    }
}





