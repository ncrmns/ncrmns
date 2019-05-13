'use strict';
export { Animal };

abstract class Animal {
  protected ownerName: string;
  protected isHealthy: boolean;
  protected healCost: number;

  public heal(budget:number):number {
    this.isHealthy = true;
    return budget-this.healCost;
  }
  public isAdoptable():boolean { return this.isHealthy;}
  public toString(){}
  public getHealcost():number{ return this.healCost;}
}