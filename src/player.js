import { Item } from './item';

export class Player {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.exp = 0;
    this.expToNextLevel = 100;
    this.stats = {};
    this.items = {};
    this.equippedWeapon = {};
    this.ahnCoin = 0;
  }
}

export class Nano extends Player {
  constructor(name) {
    super(name);
    this.stats = {
      instinct: 2,
      connectivity: 4,
      might: 1,
      stamina: 10,
      energy: 10,
      resourcefulness: 1
    }
    //add item by default to each class
  }
}

export class Scrapper extends Player {
  constructor(name) {
    super(name);
    this.stats = {
      instinct: 3,
      connectivity: 2,
      might: 2,
      stamina: 15,
      energy: 15,
      resourcefulness: 3
    }
    //add item by default to each class
  }
}

export class Merc extends Player {
  constructor(name) {
    super(name);
    this.stats = {
      instinct: 1,
      connectivity: 1,
      might: 4,
      stamina: 20,
      resourcefulness: 2
    }
    //add item by default to each class
  }
}
