export class Item {
  // example - type: weapon, ranged: true, name: Arc Blaster, stats:{ damage: 1 }
  constructor(type, ranged, name, stats) {
    this.type = type;
    this.ranged = ranged;
    this.name = name;
    this.stats = stats;
    this.allItems = {};
  }

  buildItems() {
    let gun1 = new Item("weapon", true, "Photon Pistol", { damage: 1 });
    this.allItems.photonPistol = gun1;
  }
}
