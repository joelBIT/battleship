
// Ships to be instantiated
var ship1;
var ship2;
var ship3;
var ship4;

// Used to see if a location contains a ship
var shipLocations = new Array();

var boardSize = 7;
var numShips = 3;
var shipsSunk = 0;

// Ship constructor
function Ship(length) {
  this.length = length;
  this.coordinates = new Array();
}

// Define the ships prototype
Ship.prototype.hits = 0;
Ship.prototype.isSunk = false;
Ship.prototype.gotHit = function(location) {    // Register a hit
  this.hits++;
  var index = this.coordinates.indexOf(location);
  console.log("before " + this.coordinates.length);
  this.coordinates.splice(index, 1);
  console.log("after " + this.coordinates.length);
  if (this.hits === this.length) {
    alert("ship sunk");
    shipsSunk++;
    gameOver();
  }
};
Ship.prototype.placeShip = function(length) {         // Place a ship on the board
  var direction = Math.floor(Math.random()*2);
  var row, col;
  var tempLocations = new Array();  // Stores temporary ship coordinates

  // Decide on which direction to lay out the ship
  if (direction === 1) {
    row = Math.floor(Math.random() * boardSize);
    col = Math.floor(Math.random()*(boardSize - length));
  } else {
    row = Math.floor(Math.random() * (boardSize - length));
    col = Math.floor(Math.random() * boardSize);
  }

  // Generate coordinates
  for (var i = 0; i < length; i++) {
    if (direction === 1) {
      tempLocations.push(row + "" + (col + i));
      console.log("generate: " + tempLocations[i]);
    } else {
      tempLocations.push((row + i) + "" + col);
      console.log("generate: " + tempLocations[i]);
    }
  }
  
  // Check if any of the generated coordinates already contain a ship
  for (var i = 0; i < tempLocations.length; i++) {
    if (shipLocations.length > 0 && shipLocations.indexOf(tempLocations[i]) > -1) {
      return false;
    }
  }
  
  // If no collision were found, place the ship on the generated coordinates
  for (var i = 0; i < tempLocations.length; i++) {
    shipLocations.push(tempLocations[i]);
    this.coordinates.push(tempLocations[i]);
  }
  console.log("concat: " + shipLocations.length);
  console.log(shipLocations[1]);
  return true;
};

// Checks if game is over (all ships are sunken)
function gameOver() {
  if (shipsSunk === 4) {
    var gameElement = document.getElementById("board");
    gameElement.id = "gameover";
    gameElement.innerHTML = "Game Over";
  }
}

// Initiate the game
function startGame() {
  ship1 = new Ship(1);
  ship2 = new Ship(2);
  ship3 = new Ship(3);
  ship4 = new Ship(4);
  ship4.placeShip(4);
  console.log("s4c: " + ship4.coordinates.length);
  while (!ship3.placeShip(3)) {}
  while (!ship2.placeShip(2)) {}
  console.log("s2c: " + ship2.coordinates.length);
  while (!ship1.placeShip(1)) {}
  console.log(shipLocations.length);
}

function fire(location) {
  var coordinates = document.getElementById(location);
  if (shipLocations.indexOf(location) > -1) {
    coordinates.setAttribute("class", "hit");
    if (ship4.coordinates.indexOf(location) > -1) {
      ship4.gotHit(location);
    } else if (ship3.coordinates.indexOf(location) > -1) {
      ship3.gotHit(location);
    } else if (ship2.coordinates.indexOf(location) > -1) {
      ship2.gotHit(location);
    } else {
      ship1.gotHit(location);
    }
  } else {
    coordinates.setAttribute("class", "miss");
  }
  
}

// Initialize handlers
window.onload = function() {
  startGame();
  document.getElementById("00").onclick = function() {
    fire("00");
  };
  document.getElementById("01").onclick = function() {
    fire("01");
  };
  document.getElementById("02").onclick = function() {
    fire("02");
  };
  document.getElementById("03").onclick = function() {
    fire("03");
  };
  document.getElementById("04").onclick = function() {
    fire("04");
  };
  document.getElementById("05").onclick = function() {
    fire("05");
  };
  document.getElementById("06").onclick = function() {
    fire("06");
  };
  document.getElementById("10").onclick = function() {
    fire("10");
  };
  document.getElementById("11").onclick = function() {
    fire("11");
  };
  document.getElementById("12").onclick = function() {
    fire("12");
  };
  document.getElementById("13").onclick = function() {
    fire("13");
  };
  document.getElementById("14").onclick = function() {
    fire("14");
  };
  document.getElementById("15").onclick = function() {
    fire("15");
  };
  document.getElementById("16").onclick = function() {
    fire("16");
  };
  document.getElementById("20").onclick = function() {
    fire("20");
  };
  document.getElementById("21").onclick = function() {
    fire("21");
  };
  document.getElementById("22").onclick = function() {
    fire("22");
  };
  document.getElementById("23").onclick = function() {
    fire("23");
  };
  document.getElementById("24").onclick = function() {
    fire("24");
  };
  document.getElementById("25").onclick = function() {
    fire("25");
  };
  document.getElementById("26").onclick = function() {
    fire("26");
  };
  document.getElementById("30").onclick = function() {
    fire("30");
  };
  document.getElementById("31").onclick = function() {
    fire("31");
  };
  document.getElementById("32").onclick = function() {
    fire("32");
  };
  document.getElementById("33").onclick = function() {
    fire("33");
  };
  document.getElementById("34").onclick = function() {
    fire("34");
  };
  document.getElementById("35").onclick = function() {
    fire("35");
  };
  document.getElementById("36").onclick = function() {
    fire("36");
  };
  document.getElementById("40").onclick = function() {
    fire("40");
  };
  document.getElementById("41").onclick = function() {
    fire("41");
  };
  document.getElementById("42").onclick = function() {
    fire("42");
  };
  document.getElementById("43").onclick = function() {
    fire("43");
  };
  document.getElementById("44").onclick = function() {
    fire("44");
  };
  document.getElementById("45").onclick = function() {
    fire("45");
  };
  document.getElementById("46").onclick = function() {
    fire("46");
  };
  document.getElementById("50").onclick = function() {
    fire("50");
  };
  document.getElementById("51").onclick = function() {
    fire("51");
  };
  document.getElementById("52").onclick = function() {
    fire("52");
  };
  document.getElementById("53").onclick = function() {
    fire("53");
  };
  document.getElementById("54").onclick = function() {
    fire("54");
  };
  document.getElementById("55").onclick = function() {
    fire("55");
  };
  document.getElementById("56").onclick = function() {
    fire("56");
  };
  document.getElementById("60").onclick = function() {
    fire("60");
  };
  document.getElementById("61").onclick = function() {
    fire("61");
  };
  document.getElementById("62").onclick = function() {
    fire("62");
  };
  document.getElementById("63").onclick = function() {
    fire("63");
  };
  document.getElementById("64").onclick = function() {
    fire("64");
  };
  document.getElementById("65").onclick = function() {
    fire("65");
  };
  document.getElementById("66").onclick = function() {
    fire("66");
  };
};