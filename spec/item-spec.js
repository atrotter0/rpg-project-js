import { Item } from './../src/item.js';

describe('Item', function() {
  it('should test whether an Item has properties after instantiation', function() {
    const item = new Item("photonPistol", "weapon", true, "Photon Pistol", { damage: 1 });
    expect(item.id).toEqual("photonPistol");
    expect(item.type).toEqual("weapon");
    expect(item.ranged).toEqual(true);
    expect(item.name).toEqual("Photon Pistol");
    expect(item.stats.damage).toEqual(1);
    expect(item.allItems.length).toEqual(undefined);
  });

  it('should test whether all items populate', function() {
    const items = new Item();
    items.buildItems();
    let expected = new Item("photonPistol", "weapon", true, "Photon Pistol", { damage: 1 });
    let expected2 = new Item("laserGatling", "weapon", true, "Laser Gatling", { damage: 3 });
    let expected3 = new Item("dataPad", "weapon", true, "Data Pad", { damage: 2 });
    expect(items.allItems.photonPistol).toEqual(expected);
    expect(items.allItems.laserGatling).toEqual(expected2);
    expect(items.allItems.dataPad).toEqual(expected3);
  });
});
