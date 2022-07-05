let array = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
]
let word ='ABCCED'


// var exist = function(board, word){

//     //map to keep track of the usage(it calls them all false in the beginning)
//     const isUsed = board.map(row => row.map( _=>false))
//         //console.log(isUsed)
//     const target = word.split('')
//     const current = []

//     const walk = (i,j) =>{


//         //check if the letter is what we want
//         if(board[i][j]=== target[0]){
//             current.push(target.shift())
//             //continue the next walk in for directions
//         }
//     }
// }


// var exist = function(board, word){
//     for(let i = 0; i< board.length; i++){
//         for(let j = 0; j < board[i].length; j++){
            
//         }
//     }

// }

const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];

const exist = (board, word) => {
    if (board.length === 0) {
        
        console.log(false)
        return false;
    }

    const depthFirstSearch = (row, col, k) => {
        if (board[row][col] !== word[k]) {
            console.log(false)
            return false;

        }

        if (k === word.length - 1) {
            console.log(true)
            return true;
        }

        board[row][col] = 'VISITED';
        for (const [diffRow, diffCol] of directions) {
            const nextRow = row + diffRow;
            const nextCol = col + diffCol;
            if (
                nextRow > -1 &&
                nextCol >= 0 &&
                nextRow < board.length &&
                nextCol < board[0].length
            ) {
                if (depthFirstSearch(nextRow, nextCol, k + 1)) {
                    console.log(true)
                    return true;
                }
            }
        }

        board[row][col] = word[k];
        console.log(false)
        return false;
    };

    for (let row = 0; row < board.length; ++row) {
        for (let col = 0; col < board[0].length; ++col) {
            if (depthFirstSearch(row, col, 0)) {
                console.log(true, 'Answer: ' + board[row]+board[col])
                return true;
            }
        }
    }
    console.log(false)
    return false;
};
exist(array, word);