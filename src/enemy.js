export class Enemy {
  constructor(id, name, attackDescriptor, damage, specialDamage, hp, exp) {
    this.id = id;
    this.name = name;
    this.attackDescriptor = attackDescriptor;
    this.damage = damage;
    this.specialDamage = specialDamage;
    this.stats = { stamina: hp };
    this.exp = exp;
  }

  attack(player) {
    player.stats.stamina -= this.damage;
  }
}
