import { Item } from './item';

export class ItemBag {
  constructor() {
    //id, type, ranged, name, stats
    this.photonPistol = new Item("photonPistol", "weapon", true, "Photon Pistol", { damage: 1 });
    this.laserGatling = new Item("laserGatling", "weapon", true, "Laser Gatling", { damage: 3 });
    this.dataPad = new Item("dataPad", "weapon", true, "Data Pad", { damage: 2 });
    this.beet = new Item("beet", "???", false, "A Beet", { damage: 0 });
  }
}
