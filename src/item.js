export class Item {
  // example - type: weapon, ranged: true, name: Arc Blaster, stats:{ damage: 1 }
  constructor(id, type, ranged, name, stats) {
    this.id = id;
    this.type = type;
    this.ranged = ranged;
    this.name = name;
    this.stats = stats;
  }
}
