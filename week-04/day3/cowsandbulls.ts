// Create a class what is capable of playing exactly one game of Cows and Bulls (CAB). The player have to guess a 4 digit number. For every digit that the player guessed correctly in the correct place, they have a “cow”. For every digit the player guessed correctly in the wrong place is a “bull.” If the player types a number that does not exist, that quess will not have any result.

// Example: If the number to be found is "7624" and the player types "7296", the result is: "1 cow, 2 bull".

// The CAB object should have a random 4 digit number, which is the goal to guess.
// The CAB object should have a state where the game state is stored (playing, finished).
// The CAB object should have a counter where it counts the guesses.
// The CAB object should have a guess method, which returns a string of the guess result
// All methods, including constructor should be tested

'use strict';
export { CAB };

class CAB {
  numbertoguess: string;
  gameison: boolean;
  counter: number;

  constructor(test: number = Math.floor(Math.random() * (9999 - 1000) + 1000)) {
    this.numbertoguess = test.toString();
    this.gameison = true;
    this.counter = 0;
  }

  play(number: number): string {
    if (this.gameison){
      let inpstr: string = number.toString();
      let cow: number = 0;
      let bull: number = 0;
      for (let i: number = 0; i < 4; i++) {
        for (let j: number = 0; j < 4; j++) {
          if (inpstr[i] == this.numbertoguess[j]) {
            if (i == j) {
              cow++;
            } else {
              bull++;
            }
          }
        }
      }
      if (cow == 4 ){
        this.gameison = false;
        return 'You have won the game';
      }
      this.counter++;
      return `Cow:${cow}, Bull:${bull}`;
    } else { return 'The game is over'}
  }
}