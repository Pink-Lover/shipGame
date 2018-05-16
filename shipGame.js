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
    ships: [{ locations: ["A6", "B6", "C6"], hits: ["", "", ""]},
            { locations: ["C4", "D4", "E4"], hits: ["", "", ""]},
            { locations: ["B0", "B1", "B2"], hits: ["", "", ""]},
            ],
    fire: function(guess){
        for (var i = 0; i < this.numShips; i++){
            var ship = this.ships[i];
            var locations = ship.locations;
            var index = locations.indexOf(guess);
            if(index >= 0){
                ship.hits[index] = 'hit';
                view.displayHit(guess);
                view.displayMessage('HIT!!');
                if (this.isSunk(ship)){
                    view.displayMessage('You sank my battleship!');
                    this.shipSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage('You missied.')
        return false;
    },
    isSunk: function(ship){
        for (var i = 0; i < this.shipLength; i++){
            if (ship.hits[i] !== "hit"){
                return false;
            }
        }
        return true;
    }
}