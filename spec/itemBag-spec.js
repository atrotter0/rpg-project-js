import { Item } from './../src/item.js';
import { ItemBag } from './../src/itemBag.js';

describe('ItemBag', function() {
  it('should test whether all items populate in itemBag', function() {
    const itemBag = new ItemBag();
    const expectedItem = new Item("photonPistol", "weapon", true, "Photon Pistol", { damage: 1 });
    expect(itemBag.photonPistol).toEqual(expectedItem);
  });
});
