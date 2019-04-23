'use strict';
export { Aircraft }

class Aircraft {
  type: string;
  ammo: number;
  bdmg: number;
  maxammo: number;
  priority: boolean;

  constructor(type: string, ammo: number, bdmg: number, priority: boolean, maxammo: number) {
    this.type = type;
    this.ammo = ammo;
    this.bdmg = bdmg;
    this.maxammo = maxammo;
    this.priority = priority;
  }

  fight() {
    let dmg: number = this.ammo * this.bdmg;
    this.ammo = 0;
    return dmg;
  }

  refill(ammo) {
    ammo -= this.maxammo - this.ammo;
    this.ammo += this.maxammo - this.ammo;
    return ammo;
  }


  getType() {
    return this.type;
  }

  getStatus() {
    return `              Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.bdmg}, All Damage: ${this.ammo * this.bdmg}`;
  }

  isPriority() {
    return this.priority;
  }
}