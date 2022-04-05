function stepBoard(board) {
    // Empty array which holds the new state value and returns
    const state = Array(board.length).fill().map(() => Array(board[0].length));

    // Loop through all the elements of the array/board
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[row].length; col++) {
          // Check to see if the board is empty, then return the board
          if(board[row][col] == null){
            return board;
          }
          // Helper function to implement the rules
           setState(row, col, board, state); 
        }
    }

    // Loop through the array/board again and set the board to the state values
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[row].length; col++) {
           board[row][col] = state[row][col];
        }
    }

    // Helper function to implement the rules
    function setState(row, col, board, state) {
        const rowMax = board.length; // End of the row
        const colMax = board[row].length; // End of the column
        const cell = board[row][col]; // Current state of cell
        
        // Initializing variable to store the number of living neighbors
        let living = 0;

        // Condition to look at the cell on top of the current cell
        if(row-1 >= 0) {
          living += board[row-1][col];
        }

        // Condition to look at the cell on the top right of the current cell
        if(row-1 >= 0 && col+1 < colMax) {
          living += board[row-1][col+1];
        }

        // Condition to look at the cell on the right of the current cell
         if(col+1 < colMax) {
           living += board[row][col+1];
         }

         // Condition to look at the cell on the bottom right of the current cell
        if(row+1 < rowMax && col+1 < colMax) {
          living += board[row+1][col+1];
        }

         // Condition to look at the cell on the bottom of the current cell
        if(row+1 < rowMax) {
          living += board[row+1][col];
        }

        // Condition to look at the cell on the bottom left of the current cell
        if(row+1 < rowMax && col-1 >= 0) {
          living += board[row+1][col-1];
        }

        // Condition to look at the cell on the left of the current cell
        if(col-1 >= 0) {
          living += board[row][col-1];
        }
        
        // Condition to look at the cell on the top left of the current cell
        if(col-1 >= 0 && row-1 >= 0) {
          living += board[row-1][col-1];
        }

        // Checks if the current cell is true and has 2 or 3 neighbors alive
        // If yes, then current cell is true
        if(cell === true && living === 2 || living === 3) {
            state[row][col] = true;
        } 
        // Checks if the current cell is dead and has 3 neighbors alive
        // If yes, then current cell is true
        else if(cell === false && living === 3) {
            state[row][col] = true;
        }
        // Otherwise, the cell is false if above conditions fail
        else {
          state[row][col] = false;
        }
    }
    // Return the current boolean values in the board
    return board;
};

/*console.log(stepBoard([]));
// should print: []

console.log(stepBoard([[true, true, true]]));
// should print: [[false, true, false]]

console.log(stepBoard([     [true, false, false, true, true, false, false, false, false],     [true, true, false, false, false, true, false, true, true],     [true, true, true, true, false, true, false, false, true],     [true, false, true, false, false, true, false, true, false],     [true, false, false, true, true, true, true, false, false],     [true, false, true, true, false, true, true, true, true],     [false, false, true, false, true, false, false, true, false],     [false, true, true, true, false, false, true, false, true],     [false, true, true, true, false, true, false, false, false], ]));

// should print: [     [true, true, false, false, true, false, false, false, false],     [false, false, false, false, false, true, true, true, true],     [false, false, false, true, false, true, false, false, true],     [true, false, false, false, false, false, false, true, false],     [true, false, false, false, false, false, false, false, true],     [false, false, true, false, false, false, false, false, true],     [false, false, false, false, true, false, false, false, false],     [false, false, false, false, false, true, true, true, false],     [false, true, false, true, true, false, false, false, false], ]*/
