import { Player } from './player';
import { Item } from './item';
import { ItemBag } from './itemBag';
import { EnemyBag } from './enemyBag';

export class Game {
  constructor() {
    this.player = new Player();
    this.allItems = new ItemBag();
    this.allEnemies = new EnemyBag();
  }
}
