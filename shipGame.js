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
view.displayMessage("1888FPS");
view.displayHit("A3");
view.displayHit("C4");