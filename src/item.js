export class Item {
  // example - type: weapon, ranged: true, name: Arc Blaster, stats:{ damage: 1 }
  constructor(id, type, ranged, name, stats) {
    this.id = id;
    this.type = type;
    this.ranged = ranged;
    this.name = name;
    this.stats = stats;
    this.allItems = {};
  }

  buildItems() {
    let gun1 = new Item("photonPistol", "weapon", true, "Photon Pistol", { damage: 1 });
    let gun2 = new Item("laserGatling", "weapon", true, "Laser Gatling", { damage: 3 });
    let gun3 = new Item("dataPad", "weapon", true, "Data Pad", { damage: 2 });
    this.allItems.photonPistol = gun1;
    this.allItems.laserGatling = gun2;
    this.allItems.dataPad = gun3;
  }
}
