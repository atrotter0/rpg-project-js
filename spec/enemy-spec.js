import { Enemy } from './../src/enemy.js';
import { Player, Nano } from './../src/player.js';

describe('Enemy', function() {
  it('should test whether or not an Enemy has properties after instantiation', function() {
    const enemy = new Enemy("streetPunk", "Street Punk", "punches", 1, 3, 5, 10);
    expect(enemy.id).toEqual('streetPunk');
    expect(enemy.name).toEqual('Street Punk');
    expect(enemy.attackDescriptor).toEqual('punches');
    expect(enemy.damage).toEqual(1);
    expect(enemy.specialDamage).toEqual(3);
    expect(enemy.stats.stamina).toEqual(5);
    expect(enemy.exp).toEqual(10);
  });

  it('should test that enemy attacks player', function() {
    const nano = new Nano();
    const enemy = new Enemy("streetPunk", "Street Punk", "punches", 1, 3, 5, 10);
    enemy.attack(nano);
    expect(nano.stats.stamina).toEqual(9);
  });
});
