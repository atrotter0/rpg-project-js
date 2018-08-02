import { Enemy } from './../src/enemy.js';

describe('Enemy', function() {
  it('should test whether or not an Enemy has properties after instantiation', function() {
    const enemy = new Enemy("streetPunk", "Street Punk", "punches", 1, 3, 5, 10);
    expect(enemy.id).toEqual('streetPunk');
    expect(enemy.name).toEqual('Street Punk');
    expect(enemy.attackDescriptor).toEqual('punches');
    expect(enemy.damage).toEqual(1);
    expect(enemy.specialDamage).toEqual(3);
    expect(enemy.hp).toEqual(5);
    expect(enemy.exp).toEqual(10);
  });
});
