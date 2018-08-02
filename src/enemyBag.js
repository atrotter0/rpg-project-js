import { Enemy } from './enemy';

export class EnemyBag {
  constructor() {
    //id, name, type, damage, specialDamage, hp, exp
    this.ryanMurry = new Enemy("ryanMurry", "Ryan Murry", "lectures", 1, 2, 5, 5);
    this.streetPunk = new Enemy("streetPunk", "Street Punk", "punches", 1, 3, 5, 10);
  }
}
