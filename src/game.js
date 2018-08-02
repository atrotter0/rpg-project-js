import { Player } from './player';
import { Item } from './item';
import { ItemBag } from './itemBag';
import { EnemyBag } from './enemyBag';

export class Game {
  constructor() {
    this.player = new Player();
    this.allItems = new ItemBag();
    this.allEnemies = new EnemyBag();
    this.lootTable = this.buildLootTable();
    this.currentEnemy = {};
  }

  buildLootTable() {
    return Object.keys(this.allItems);
  }

  allItemsCount() {
    return this.lootTable.length;
  }

  awardLoot() {
    const number = Math.floor(Math.random() * this.allItemsCount() - 1);
    const loot = this.allItems[this.lootTable[number]];
    this.player.items[loot.id] = loot;
  }

  startBattle(enemy) {
    this.currentEnemy = enemy;
  }
}
