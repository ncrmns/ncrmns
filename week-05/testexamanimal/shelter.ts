'use strict';

import { Animal } from "./animal";

class Shelter {
  private budget: number = 50;
  private animals: Animal[];
  private adopterNames: string[];

  public rescue(animal: Animal):number {
    this.animals.push(animal);
    return this.animals.length;
  }

  public heal():number {
    for (let i:number = 0; i< this.animals.length; i++){
      if (this.animals[i].isAdoptable()=== false && this.animals[i].getHealcost() < this.budget){
          this.budget = this.animals[i].heal(this.budget);
        return 1;
      }
    }
    return 0;
  }

  public addAdopter(adopter: string){this.adopterNames.push(adopter);}

  public findNewOwner(){
    this.animals.splice(Math.floor(Math.random()*this.animals.length), 1);
    this.adopterNames.splice(Math.floor(Math.random()*this.adopterNames.length), 1);
  }

  earnDonation(amount:number):number{
    this.budget += amount;
    return this.budget;
  }

  toString(){};
}
