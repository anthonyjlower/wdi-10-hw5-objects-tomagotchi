

//Tamogotchi Object
var tamagotchi1 = {
  name: "Bruce",
  creatureType: "Grizzly Bear",
  foodInTummy: 100,
  restedness: 100,
  health: 100,
  cry() {
  	console.log(this.name + ": Whaaaaa!");
  	this.foodInTummy -= 10;
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
  	const hungerTimer = setInterval(() =>{
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
  },
  // I can't get this clear interval to work. In the lab I was putthing the clearInterval() inside the start() method and I think I am having a scope issue where the variable isn't defined in the new stop() method I am writing.
  // stop(){
  // 	clearInterval(hungerTimer); clearInterval(sleepTimer); clearInterval(sickTimer);
  // }
}


var tamagotchi2 = {
  name: "Lucy",
  creatureType: "Mountain Dog",
  foodInTummy: 75,
  restedness: 75,
  health: 65,
  cry() {
  	console.log(this.name + ": Whaaaaa!");
  	this.foodInTummy -= 10;
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
  },
  start() {
  	const hungerTimer = setInterval(() =>{
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



const player1 = {
	name: "Anthony",
	sayName() {
		console.log("Hello, my name is " + this.name);
	},
	feedTamagotchi(typeOfFood) {
		tamagotchi1.foodInTummy ++; tamagotchi2.foodInTummy ++;
		console.log(this.name + " fed " + typeOfFood + " to " + tamagotchi1.name + " & " + tamagotchi2.name);

	},
	medicateTamagotchi(typeOfMedicine) {
		tamagotchi1.health++; tamagotchi2.health++;
		console.log(this.name + " healed " + tamagotchi1.name + " & " + tamagotchi2.name + " with " + typeOfMedicine)
	},
	knockOutTamagotchi() {
		tamagotchi1.restedness++;
		console.log(this.name + " has put " + tamagotchi1.name + " to sleep.")
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












