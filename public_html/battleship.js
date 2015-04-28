
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
function fire() {
  var cellId = document.getElementById(this.id);
  if (shipLocations.indexOf(cellId.id) > -1 && !cellId.hasAttribute("class")) {
    var audio = document.getElementById("boom");
    audio.currentTime = 0;
    audio.play();
    cellId.setAttribute("class", "hit");
    if (ship4.coordinates.indexOf(cellId.id) > -1) {
      ship4.gotHit(cellId.id);
    } else if (ship3.coordinates.indexOf(cellId.id) > -1) {
      ship3.gotHit(cellId.id);
    } else if (ship2.coordinates.indexOf(cellId.id) > -1) {
      ship2.gotHit(cellId.id);
    } else {
      ship1.gotHit(cellId.id);
    }
  } else if (!cellId.hasAttribute("class")) {
    cellId.setAttribute("class", "miss");
  }
}

// Set up handlers
function initHandlers() {
  var cells = document.querySelectorAll("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = fire;
  }
}

// Add handlers and start game when page fully loaded
window.onload = function() {
  initHandlers();
  startGame();
};