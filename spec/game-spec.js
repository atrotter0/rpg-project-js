import { Game } from './../src/game.js';
import { Player } from './../src/player.js';
import { Item } from './../src/item.js';
import { ItemBag } from './../src/itemBag.js';
import { EnemyBag } from './../src/enemyBag.js';

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should test whether a game is instantiated with properties', function() {
    const player = new Player();
    const itemBag = new ItemBag();
    const enemyBag = new EnemyBag();
    expect(game.player).toEqual(player);
    expect(game.allItems).toEqual(itemBag);
    expect(game.allEnemies).toEqual(enemyBag);
    expect(game.lootTable.length).toEqual(4);
    expect(game.currentEnemy).toEqual(undefined);
  });

  it('shoud test that a loot table is correctly built from all items', function() {
    const expectedTable = ["photonPistol", "laserGatling", "dataPad", "beet"];
    expect(game.lootTable).toEqual(expectedTable);
  });

  it('should test that the correct count of items is returned from the lootTable', function() {
    expect(game.allItemsCount()).toEqual(4);
  });

  it('should test that an item is awarded to player', function() {
    game.awardLoot();
    const playerItems = Object.keys(game.player.items);
    expect(playerItems.length).toEqual(1);
  });
});
