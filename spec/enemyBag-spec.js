import { EnemyBag } from './../src/enemyBag.js';

describe('EnemyBag', function() {
  it('should test whether or not enemyBag has all enemies after instantiation', function() {
    const enemyBag = new EnemyBag();
    const enemyBagKeys = Object.keys(enemyBag);
    expect(enemyBagKeys.length).toEqual(2);
  });
});
