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
    ships: [{ locations: [0,0,0], hits: ["", "", ""] },
            { locations: [0,0,0], hits: ["", "", ""] },
            { locations: [0,0,0], hits: ["", "", ""] },
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
    },
    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if (direction === 1){
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }
    
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++){
            if (direction === 1){
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },
    collision: function(locations){
        for (var i = 0; i < this.numShips; i++){
            var ship = model.ships[i];
            for (var j = 0; j < locations.length; j++){
                return true;
            }
        }
        return false;
    }
};




var controller = {
    guesses: 0,
    processGuess: function(guess){
        var location = parseGuess(guess);
        if (location){
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model,shipSunk === model.numShips){
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
}




function parseGuess(guess){
    var alphabet = ["A","B","C","D","E","F","G"];
    if (guess === null || guess.length !== 2){
        alert("Oops,please enter a letter and a number on the board.");
    } else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if(isNaN(row) || isNaN(column)){
            alert("Oops,that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize){
            alert("Oops, that's off the board")
        } else {
            return row + column;
        }
    }
    return null;
};



function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handlekeyPress;
    model.generateShipLocations();
}



function handleFireButton() {
    var guessInput =  document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}


function handlekeyPress(e){
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13){
        fireButton.click();
        return false;
    }
}



window.onload = init;