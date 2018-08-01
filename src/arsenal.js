import { Item } from './item';

export class Arsenal {
  constructor() {
    this.photonPistol = new Item("photonPistol", "weapon", true, "Photon Pistol", { damage: 1 });
    this.laserGatling = new Item("laserGatling", "weapon", true, "Laser Gatling", { damage: 3 });
    this.dataPad = new Item("dataPad", "weapon", true, "Data Pad", { damage: 2 });
  }
}
