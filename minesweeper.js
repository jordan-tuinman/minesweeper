document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{
      row: 0,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 0,
      col: 1,
      isMine: true,
      hidden: true,
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      row: 0,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 0,
      col: 4,
      isMine: true,
      hidden: true,
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 1,
      col: 4,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 2,
      col: 4,
      isMine: true,
      hidden: true,
    },
    {
      row: 3,
      col: 0,
      isMine: true,
      hidden: true,
    },
    {
      row: 3,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      row: 3,
      col: 2,
      isMine: false,
      hidden: true,
    },
    {
      row: 3,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 3,
      col: 4,
      isMine: true,
      hidden: true,
    },
    {
      row: 4,
      col: 0,
      isMine: false,
      hidden: true,
    },
    {
      row: 4,
      col: 1,
      isMine: false,
      hidden: true,
    },
    {
      row: 4,
      col: 2,
      isMine: true,
      hidden: true,
    },
    {
      row: 4,
      col: 3,
      isMine: false,
      hidden: true,
    },
    {
      row: 4,
      col: 4,
      isMine: false,
      hidden: true,
    }
  ],
}


function startGame() {
  // loop board cells content
  // call countSurroundingMines for each cell
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }


  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
document.addEventListener(
  'click', checkForWin
);
document.addEventListener(
  'contextmenu', checkForWin
);

function checkForWin() {
  // (checks cells isMine:false are hidden: false)
  // (cells with isMine:true are isMarked: true)
  var markedBombs = 0;
  var clearedCells = 0;

  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine == true && board.cells[i].isMarked == true) {
      markedBombs++;
    } else if (board.cells[i].isMine == false && board.cells[i].hidden == false) {
      clearedCells++;
    }
  }
  if (markedBombs + clearedCells == board.cells.length) {
    // You can use this function call to declare a winner (once you've
    // detected that they've won, that is!)
    lib.displayMessage('You win!')
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
// 
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines(cell) {
  // (currently accessed cell is already specified in startgame func.) 
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0
  // loop through array for values of ismine true
  surrounding.forEach(element => {
    if (element.isMine == true) {
      return count++;
    }
  })
  // return total number of true mines
  return count;
}