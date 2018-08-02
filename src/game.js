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
    this.combatTurn = "";
  }

  buildLootTable() {
    return Object.keys(this.allItems);
  }

  allItemsCount() {
    return this.lootTable.length;
  }

  lootTablePositions() {
    if (this.lootTable.length > 1) {
      return this.lootTable.length - 1;
    } else {
      return 0;
    }
  }

  awardLoot() {
    const number = Math.floor(Math.random() * this.lootTablePositions());
    const loot = this.allItems[this.lootTable[number]];
    this.player.items[loot.id] = loot;
  }

  startBattle(enemyId) {
    this.setCurrentEnemy(enemyId);
    this.rollInitiative();
    //allowTurn();
  }

  setCurrentEnemy(enemyId) {
    this.currentEnemy = this.allEnemies[enemyId];
  }

  rollInitiative() {
    const playerRoll = Math.floor(Math.random() * 2) + 1;
    this.setCombatTurn(playerRoll);
  }

  setCombatTurn(roll) {
    roll === 1 ? this.combatTurn = "player" : this.combatTurn = "enemy";
  }

  runEnemyTurn() {
    this.currentEnemy.attack(this.player);
  }

  //checkDeath
    //isDead
}
