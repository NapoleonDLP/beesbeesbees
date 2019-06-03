var ForagerBee = function() {
// call the Bee superclass
Bee.call(this);
// an age property that is set to 10
this.age = 10;
// a job property that is set to find pollen
this.job = 'find pollen';
// a color property inherited from bee that is set to yellow
  //inherits from bee no need to adjust
// a food property that is inherited from grub
  //inherits from bee no need to adjust
// an eat method that is inherited from grub
  //inherits from bee no need to adjust
// a canFly property that is set true
this.canFly = true;
// a treasureChest property that is set to an empty array []
this.treasureChest = [];
};

// set the prototype
ForagerBee.prototype = Object.create(Bee.prototype);
// a forage method that allows the bee to add a treasure to the treasureChest
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}
// set the constructor
ForagerBee.prototype.constructor = ForagerBee;
