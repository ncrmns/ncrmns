'use strict';
import { Aircraft } from './aircraft'
import { F16 } from './f16'
import { F35 } from './f35'
export { Carrier }

class Carrier {
  aircrafts: Aircraft[];
  ammostore: number;
  hp: number;
  alive: boolean = true;

  constructor(ammostore: number, hp: number) {
    this.ammostore = ammostore;
    this.hp = hp;
    this.aircrafts = [];
  }

  add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill() {
    let prior: Aircraft[] = [];
    let rest: Aircraft[] = [];
    for (let i = 0; i < this.aircrafts.length; i++) {
      if (this.aircrafts[i].isPriority()){
        prior.push(this.aircrafts[i]);
      } else {
        rest.push(this.aircrafts[i]);
      }
    }
    for (let i = 0; i < prior.length; i++) {
      this.ammostore = prior[i].refill(this.ammostore);
    }
    for (let i= 0; i< rest.length; i++){
      this.ammostore = rest[i].refill(this.ammostore);
    }
  }

  fight(carrier: Carrier) {
    if (this.alive){
      let dmg: number = 0;
      for (let i = 0; i < this.aircrafts.length; i++) {
        dmg += this.aircrafts[i].fight();

      }
      carrier.hp -= dmg;
      if (carrier.hp < 0) {
        carrier.hp = 0;
        carrier.alive = false;
      }
    }
  }

  getStatus(){
    if (this.hp != 0){
      let dmg = 0;
      for (let i = 0; i < this.aircrafts.length; i++) {
        dmg += this.aircrafts[i].ammo*this.aircrafts[i].bdmg;
      }
      console.log(`            HP: ${this.hp}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammostore}, Total Damage: ${dmg}`);
      for (let i = 0; i < this.aircrafts.length; i++) {
        console.log(this.aircrafts[i].getStatus());
      }
    } else {
      console.log('            ///////////////////////////  Carrier died  ///////////////////////');
    }
  }

  isAlive(){return this.alive;}
}