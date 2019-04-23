'use strict';
export { Pirate };

class Pirate {
  toxiclvl: number = 0;
  isDead: boolean = false;
  passedout: boolean = false;

  drinkSomeRum() {
    if (!this.isDead) {
      this.toxiclvl++;
    } else {
      console.log('A dead  pirate cant drink');
    }
  }

  howsItGoingMate() {
    if (this.toxiclvl < 5 && !this.isDead) {
      console.log('Pour me anudder!');
    } else if (!this.isDead) {
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      this.toxiclvl = 0;
    } else {
      console.log('You are speaking to a dead  pirate');
    }
  }

  die() {
    this.isDead = true;
  }

  brawl(x: Pirate) {
    if (!this.isDead) {
      if (Math.random() * 3 < 1) {
        this.isDead = true;
      } else if (Math.random() * 2 == 1) {
        x.isDead = true;
      } else {
        this.passedout = true;
        x.passedout = true;
      }
    } else {
      console.log('he is already dead');
    }
  }
}