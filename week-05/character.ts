'use strict';
import { d6 } from './d6';
export { Character };

abstract class Character {
  protected LVL: number = 1;
  protected maxHP: number = 100;
  protected HP: number = 100;
  protected DP: number = 2;
  protected SP: number = 2;
  protected alive: boolean = true;

  getLVL(): number { return this.LVL; }
  getmaxHP(): number { return this.maxHP; }
  getHP(): number { return this.HP; }
  getDP(): number { return this.DP; }
  getSP(): number { return this.SP; }
  isAlive(): boolean { return this.alive; }



  setHP(value: number) {
    this.HP += value;
    if (this.HP < 0) {
      this.alive = false;
    }
  }

  lvlUp() {
    this.LVL++;
    this.maxHP += d6();
    this.DP += d6();
    this.SP += d6();
  }

  attack(other: Character): void {
    this.strike(other);
    if (other.isAlive()) {
      other.strike(this);
    } else {
      this.lvlUp();
    }
  }

  strike(other: Character) {
    let SV: number = this.SP + 2 * d6();
    if (SV > other.getDP()) {
      other.setHP(SV - other.getDP());
    }
  }
}
