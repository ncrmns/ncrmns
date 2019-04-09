'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let pc1='My todo:\n';
let pc2=' - Download games\n     - Diablo';
todoText=pc1.concat(todoText,pc2);


console.log(todoText);



export {};