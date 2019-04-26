'use strict';
import { Character } from './character';
import { d6 } from "./d6";
export { Hero };

class Hero extends Character {
  constructor(
    LVL: number = 1,
    HP: number = 20 + d6() + d6() + d6(),
    DP: number = d6() + d6(),
    SP: number = 5 + d6()
    ) {
    super()
    this.LVL = LVL;
    this.HP = HP;
    this.DP = DP;
    this.SP = SP;
  }

  newAreaHeal(){
    let random: number = Math.floor(Math.random()* 10);
    if (random == 9){
      this.HP += this.maxHP/2;
    } else if (random > 6) {
      this.HP += this.maxHP/3;
    } else {
      this.HP += this.maxHP/10;
    }
  }
}