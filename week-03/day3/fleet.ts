'use strict';
import { Thing } from './thing';


export class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing): void {
    this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }

  print(){
    for (let i=0; i<this.things.length; i++){
      if (this.things[i].getCompleted()){
        console.log(`[X] ${this.things[i].getName()}`);
      } else {
        console.log(`[ ] ${this.things[i].getName()}`);
      }
    }
  }
} 
