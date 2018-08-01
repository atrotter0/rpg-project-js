export class Player {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.exp = 0;
    this.expToNextLevel = 100;
    this.stats = {
      instinct: 1,
      connectivity: 1,
      might: 1,
      stamina: 1
    };
    this.items = {};
    this.ahnCoin = 0;
  }
}
