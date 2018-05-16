var view = {
    displayMessage: function(msg){
        var message = document.getElementById('messageArea');
        message.innerHTML = msg;
    },
    displayHit: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute('class','hit');
    },
    displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute('class','miss');
    }
};
var model = {
    boardSize: 7,
    numShips: 3,
    shipSunk: 0,
    shipLength: 3,
    ships: [{ location: ["A6", "B6", "C6"], hits: ["", "", ""]},
            { location: ["C4", "D4", "E4"], hits: ["", "", ""]},
            { location: ["B0", "B1", "B2"], hits: ["", "", ""]},
            ],
    fire: function(guess){
        for (var i = 0; i < this.numShips; i++){
            var ship = this.ships[i];
        }
    }
}