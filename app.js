//test
// I love this comment!

var currentLetter = 'O';


function getWhatLetter() {

  if (currentLetter === 'X') {
    currentLetter = 'O';
  }
  else {
    currentLetter = 'X';
  }

  return currentLetter;
}

function displayAction(cell, letter) {
  cell.textContent = letter;
}

function isCellOpen(cell) {
  return cell.textContent === '';
}

function handlePlayerAction(id) {

  // grab the cell
  var cell = document.getElementById(id);

  // handle when clicking the cell
  cell.onclick = function() {
    if (!isCellOpen(cell)) return;
    var letter = getWhatLetter();
    displayAction(cell, letter);
  };

}


// find all the cells on the page
var cells = document.querySelectorAll('td');

// loop through the cells
for (var i = 0; i < cells.length; i++) {
  var id = cells[i].id;

  // setup the handler
  handlePlayerAction(id);
}
