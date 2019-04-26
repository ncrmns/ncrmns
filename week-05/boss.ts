'use strict';
import { Character } from './character';
import { d6 } from './d6';
export { Boss };

class Boss extends Character {
  constructor (
    LVL: number = 1,
    HP: number = 2 * LVL * d6() + d6(),
    DP: number = LVL/2 * d6() + d6() / 2 ,
    SP: number = LVL * d6() + LVL
  ){
    super()
    this.LVL = LVL;
    this.HP = HP;
    this.DP = DP;
    this.SP = SP;    
  }
}