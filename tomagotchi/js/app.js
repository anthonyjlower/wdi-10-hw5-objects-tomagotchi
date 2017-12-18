

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
  	this.health --;
  	console.log(this.name + " has " + this.health + " health remaining.");
  },
  yawn() {
  	console.log(this.name + ": Yaaaawwwnnn!");
  	this.restedness --;
  	console.log(this.name + " has " + this.restedness + " energy remaining." );
  },
  start() {
  	const hungertimer = setInterval(() =>{
		this.cry()
	}, 6000
	)
  	const sleepTimer = setInterval(() =>{
		this.yawn()
	}, 10000
	)
  	const sickTimer = setInterval(() =>{
		this.puke()
	}, 25000
	)
  }
}


var tamagotchi2 = {
  name: "Lucy",
  creatureType: "Mountain Dog",
  foodInTummy: 75,
  restedness: 75,
  health: 65,
  cry() {
  	console.log(this.name + ": Whaaaaa!");
  	this.foodInTummy -= 25;
  	console.log(this.name + " has " + this.foodInTummy + " much food in their tummy.")
  },
  puke() {
  	console.log(this.name + ': ":O ~~~~"');
  	this.health --;
  	console.log(this.name + has + this.health + " health remaining");
  },
  yawn() {
  	console.log(this.name + ": Yaaaawwwnnn!");
  	this.restedness --;
  	console.log(this.name + " has " + this.restedness + " energy remaining." );
  }
}



const player1 = {
	name: "Anthony",
	sayName() {
		console.log("Hello, my name is " + this.name);
	},
	feedTamagotchi(feedFirst, feedSecond) {
		feedFirst.foodInTummy ++; feedSecond.foodInTummy ++;
		console.log(this.name + " fed " + feedFirst.name + " & " + feedSecond.name);

	},
	medicateTamagotchi(whoToHeel) {
		whoToHeel.health++;
		console.log(this.name + " healed " + whoToHeel.name)
	},
	knockOutTamagotchi(whoToKnockout) {
		whoToKnockout.restedness++;
		console.log(this.name + " has put " + whoToKnockout.name + " to sleep.")
	}
}



/************ GLOBAL SCOPE TIMERS ******************/

// const hungerTimer = (whoToActivate) => {
// 	const hungertimer = setInterval(() =>{
// 		whoToActivate.cry()
// 	}, 6000
// 	)
// };
// const yawnTimer = (whoToActivate) => {
// 	const gameTimer = setInterval(() =>{
// 		whoToActivate.yawn()
// 	}, 10000
// 	)
// };
// const sickTimer = (whoToActivate) => {
// 	const gameTimer = setInterval(() =>{
// 		whoToActivate.puke()
// 	}, 25000
// 	)
// };












