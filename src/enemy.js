export class Enemy {
  constructor(id, name, type, damage, specialDamage, hp, loot, exp) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.damage = damage;
    this.specialDamage = specialDamage;
    this.hp = hp;
    this.loot = loot;
    this.exp = exp;
  }
}
