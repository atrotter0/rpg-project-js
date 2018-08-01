import { Item } from './../src/item.js';
import { Arsenal } from './../src/arsenal.js';

describe('Arsenal', function() {
  it('should test whether all items populate in arsenal', function() {
    const arsenal = new Arsenal();
    const expectedItem = new Item("photonPistol", "weapon", true, "Photon Pistol", { damage: 1 });
    expect(arsenal.photonPistol).toEqual(expectedItem);
  });
});
