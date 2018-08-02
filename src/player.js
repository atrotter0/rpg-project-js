import { Item } from './item';
import { ItemBag } from './itemBag';

export class Player {
  constructor() {
    this.name = "";
    this.level = 1;
    this.exp = 0;
    this.expToNextLevel = 100;
    this.stats = {};
    this.items = {};
    this.allItems = new ItemBag();
    this.equippedWeapon = {};
    this.ahnCoin = 0;
  }

  attack(enemy) {
    enemy.stats.stamina -= (this.stats[this.primaryStat] + this.equippedWeapon.stats.damage);
  }
}

export class Nano extends Player {
  constructor() {
    super();
    this.stats = {
      instinct: 2,
      connectivity: 4,
      might: 1,
      stamina: 10,
      energy: 10,
      resourcefulness: 1
    };
    this.primaryStat = "connectivity";
    this.items = {
      "dataPad": this.allItems.dataPad
    };
  }
}

export class Scrapper extends Player {
  constructor() {
    super();
    this.stats = {
      instinct: 3,
      connectivity: 2,
      might: 2,
      stamina: 15,
      energy: 15,
      resourcefulness: 3
    };
    this.primaryStat = "instinct";
    this.items = {
      "photonPistol": this.allItems.photonPistol
    };
  }
}

export class Merc extends Player {
  constructor() {
    super();
    this.stats = {
      instinct: 1,
      connectivity: 1,
      might: 5,
      stamina: 20,
      resourcefulness: 2
    };
    this.primaryStat = "might";
    this.items = {
      "laserGatling": this.allItems.laserGatling
    };
  }
}
