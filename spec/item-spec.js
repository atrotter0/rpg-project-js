import { Item } from './../src/item.js';

describe('Item', function() {

  it('should test whether an Item has properties after instantiation', function() {
    const item = new Item("weapon", true, "Photon Pistol", { damage: 1 });
    expect(item.type).toEqual("weapon");
    expect(item.ranged).toEqual(true);
    expect(item.name).toEqual("Photon Pistol");
    expect(item.stats.damage).toEqual(1);
    expect(item.allItems.length).toEqual(undefined);

  });
});
