// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
const fs = require('fs');


console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"


function ticTacResult(path) {
  ///////////////// import file ////////////////////
  let arr2d = [];
  const arr = fs.readFileSync(path, 'UTF-8').split('\n');
  for (let i = 0; i < arr.length; i++) {
    arr2d.push(arr[i].split(''));
  ///////////////// import file ////////////////////
  //////////////// main function ///////////////////
  }
  if ( winchecker(arr2d)!== undefined ){
    return winchecker(arr2d);
  }
  rotate(arr2d);
  if ( winchecker(arr2d)!== undefined ){
    return winchecker(arr2d);
  }
  return 'Draw';
  //////////////// main function ///////////////////
  ////////////////  winchecker  ////////////////////
  function winchecker(arr){
    if (rowchecker(arr)!== undefined ){
      return rowchecker(arr);
    } else if (diagchecker(arr) !== undefined){
      return diagchecker(arr);
    }
  

    function diagchecker(arr){
      let row = arr[0][0] + arr[1][1] + arr[2][2];
      if (row === 'XXX'){
        return 'X';
      }
      else if (row === 'OOO'){
        return 'O';
      }
      
    }

    function rowchecker(arr){
      for (let i=0; i<3; i++){
        let row = '';
        row = arr[i][0] + arr[i][1] + arr[i][2];
        if (row === 'XXX'){
          return 'X';
        }
        else if (row === 'OOO'){
          return 'O';
        }
      }
    }
  }
  ////////////////  winchecker  ////////////////////
  /////////////// rotate matrix ////////////////////
  function rotate(arr) {
    const N = arr.length - 1;
    const result = arr.map((row, i) => row.map((val, j) => arr[N - j][i]));
    arr.length = 0;
    arr.push(...result);
    return arr;
  }
}