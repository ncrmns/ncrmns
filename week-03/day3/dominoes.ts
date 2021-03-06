import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
      console.log(value);
    });
}

let dominoes = initializeDominoes();
let sorted : any[] = [];

console.log(sorted);
sorted.push(dominoes[0]);
console.log(sorted);

for (let i=0; i<dominoes.length; i++){
  for (let j=0; j<dominoes.length; j++){
    if (dominoes[j].getvalue('a')===sorted[i].getvalue('b')){
      sorted.push(dominoes[j]);
    }
  }
}


// print(sorted);