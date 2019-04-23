'use strict';
import {Plant} from './plant'
import {Flower} from './flower'
import {Tree} from './tree'
export {Garden} 

class Garden {
  flowers: Flower[];
  trees: Tree[];

  constructor(){
    this.flowers = [];
    this.trees = [];
  }

  watering(amount){
    console.log(`Watering with ${amount}`);
    //check who needs water and add them to 'toWater[]'
    let toWater: Plant[] = [];
    for (let i=0; i<this.flowers.length; i++){
      if (this.flowers[i].needsWater()){
        toWater.push(this.flowers[i]);
      }
    }
    for (let i=0; i<this.trees.length; i++){
      if (this.trees[i].needsWater()){
        toWater.push(this.trees[i]);
      }
    }
    //water those
    for (let i=0; i<toWater.length; i++){
      toWater[i].water(amount/toWater.length);
    }
  }

  getCurrantStateGarden(){
    for (let i=0; i<this.flowers.length; i ++){
      this.flowers[i].getCurrantStateFlower();
    }
    for (let i=0; i<this.trees.length; i++){
      this.trees[i].getCurrantStateTree();
    }
    console.log();
  }
}