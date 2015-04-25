
// Ships to be instantiated
var ship1;
var ship2;
var ship3;
var ship4;

// Used to see if a location already contains a ship when placing new ships
var shipLocations = new Array();

var boardSize = 7;                          // Used for choosing ship location
var shipsSunk = 0;                          // Initially no ships are sunk

// Ship constructor
function Ship(length) {
  this.length = length;                     // Ships can have varying lengths
  this.coordinates = new Array();           // Contains location of current ship
}

// Define the ship prototype
Ship.prototype.hits = 0;                        // All ships start with 0 hits
Ship.prototype.isSunk = false;                  // Initially no ship is sunk
Ship.prototype.gotHit = function(location) {    // Register a hit
  this.hits++;
  var index = this.coordinates.indexOf(location);
  this.coordinates.splice(index, 1);
  if (this.hits === this.length) {
    var cell = document.getElementById(location);
    var sunk = document.createElement("img");
    var source = document.createAttribute("src");
    source.value = "sunken.png";
    sunk.setAttributeNode(source);
    cell.appendChild(sunk);
    shipsSunk++;
    gameOver();
  }
};

// Place a ship on the board
function placeShip(ship) {
  var direction = Math.floor(Math.random()*2);
  var row, col;
  var tempLocations = new Array();  // Stores temporary ship coordinates

  // Decide on which direction to lay out the ship
  if (direction === 1) {
    row = Math.floor(Math.random() * boardSize);
    col = Math.floor(Math.random() * (boardSize - ship.length));
  } else {
    row = Math.floor(Math.random() * (boardSize - ship.length));
    col = Math.floor(Math.random() * boardSize);
  }

  // Generate coordinates
  for (var i = 0; i < ship.length; i++) {
    if (direction === 1) {
      tempLocations.push(row + "" + (col + i));
    } else {
      tempLocations.push((row + i) + "" + col);
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
    ship.coordinates.push(tempLocations[i]);
  }
  return true;
};

// Checks if game is over (all ships are sunken)
function gameOver() {
  if (shipsSunk === 4) {
    var gameElement = document.getElementById("board");
    setTimeout(function() {gameElement.id = "gameover"; gameElement.innerHTML = "Game Over";}, 1000);
  }
}

// Initiate the game
function startGame() {
  ship1 = new Ship(1);
  ship2 = new Ship(2);
  ship3 = new Ship(3);
  ship4 = new Ship(4);
  placeShip(ship4);
  while (!placeShip(ship3)) {}
  while (!placeShip(ship2)) {}
  while (!placeShip(ship1)) {}
}

// Check if there is a ship or not in a cell
function fire(location) {
  var coordinates = document.getElementById(location);
  if (shipLocations.indexOf(location) > -1 && !coordinates.hasAttribute("class")) {
    var audio = new Audio('boom.mp3');
    audio.play();
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
  } else if (!coordinates.hasAttribute("class")) {
    coordinates.setAttribute("class", "miss");
  }
}

// Set up handlers
function initHandlers() {
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
}

// Add handlers and start game when page fully loaded
window.onload = function() {
  initHandlers();
  startGame();
};