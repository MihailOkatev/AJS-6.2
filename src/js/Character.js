export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}
// в презентации дан такой пример синтаксиса, и он не работает. из-за this?
// Character.prototype = {
//   damage: (points) => {
//     this.health -= points * (1 - this.defence / 100);
//   } };


Character.prototype.damage = function (points) {
  this.health -= points * (1 - this.defence / 100);
  if (this.health < 0) {
    this.health = 0;
  }
  try {
    if (points < 0) {
      throw new Error('урон не может быть отрицательным');
    }
  } catch (e) {
    throw new Error(e.message());
  }
};
