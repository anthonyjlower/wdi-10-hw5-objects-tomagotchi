

//Tamogotchi Object
var tamagotchi1 = {
  name: "Bruce",
  creatureType: "Grizzly Bear",
  foodInTummy: 100,
  restedness: 100,
  health: 100,
  cry() {
  	console.log(this.name + ": Whaaaaa!");
  	this.foodInTummy -= 25;
  	console.log(this.name + " has " + this.foodInTummy + " much food in their tummy.")
  },
  puke() {
  	console.log(this.name + ': ":O ~~~~"');
  },
  yawn() {
  	console.log(this.name + ": Yaaaawwwnnn!");
  }
}