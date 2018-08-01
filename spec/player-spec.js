import { Player, Nano, Scrapper, Merc } from './../src/player.js';
import { Item } from './../src/item.js';
import { Arsenal } from './../src/arsenal.js';

describe('Player', function() {
  it('should test whether a Player has properties after instantiation', function() {
    const player1 = new Player("Kevin");
    expect(player1.name).toEqual("Kevin");
    expect(player1.level).toEqual(1);
    expect(player1.exp).toEqual(0);
    expect(player1.expToNextLevel).toEqual(100);
    expect(player1.stats.length).toEqual(undefined);
    expect(player1.items.length).toEqual(undefined);
    expect(player1.equippedWeapon.length).toEqual(undefined);
    expect(player1.ahnCoin).toEqual(0);
  });

  it('should test whether a Nano has properties after instantiation', function() {
    const player1 = new Nano("Elly");
    expect(player1.name).toEqual("Elly");
    expect(player1.level).toEqual(1);
    expect(player1.exp).toEqual(0);
    expect(player1.expToNextLevel).toEqual(100);
    expect(player1.stats.instinct).toEqual(2);
    expect(player1.stats.connectivity).toEqual(4);
    expect(player1.stats.might).toEqual(1);
    expect(player1.stats.stamina).toEqual(10);
    expect(player1.stats.energy).toEqual(10);
    expect(player1.stats.resourcefulness).toEqual(1);
    expect(player1.items.dataPad.id).toEqual("dataPad");
    expect(player1.equippedWeapon.length).toEqual(undefined);
    expect(player1.ahnCoin).toEqual(0);
  });

  it('should test whether a Scrapper has properties after instantiation', function() {
    const player1 = new Scrapper("Pete");
    expect(player1.name).toEqual("Pete");
    expect(player1.level).toEqual(1);
    expect(player1.exp).toEqual(0);
    expect(player1.expToNextLevel).toEqual(100);
    expect(player1.stats.instinct).toEqual(3);
    expect(player1.stats.connectivity).toEqual(2);
    expect(player1.stats.might).toEqual(2);
    expect(player1.stats.stamina).toEqual(15);
    expect(player1.stats.energy).toEqual(15);
    expect(player1.stats.resourcefulness).toEqual(3);
    expect(player1.items.photonPistol.id).toEqual("photonPistol");
    expect(player1.equippedWeapon.length).toEqual(undefined);
    expect(player1.ahnCoin).toEqual(0);
  });

  it('should test whether a Merc has properties after instantiation', function() {
    const player1 = new Merc("Josh");
    expect(player1.name).toEqual("Josh");
    expect(player1.level).toEqual(1);
    expect(player1.exp).toEqual(0);
    expect(player1.expToNextLevel).toEqual(100);
    expect(player1.stats.instinct).toEqual(1);
    expect(player1.stats.connectivity).toEqual(1);
    expect(player1.stats.might).toEqual(4);
    expect(player1.stats.stamina).toEqual(20);
    expect(player1.stats.resourcefulness).toEqual(2);
    expect(player1.items.laserGatling.id).toEqual("laserGatling");
    expect(player1.equippedWeapon.length).toEqual(undefined);
    expect(player1.ahnCoin).toEqual(0);
  });
});
