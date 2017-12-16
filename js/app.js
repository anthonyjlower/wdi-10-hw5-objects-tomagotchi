// console.log('working')



//Clicker
const clicker = {
	clickCount: 0,
	click() {
		 this.clickCount = this.clickCount + 1
	}
}


//My Information
const myInformation = {
	myName: 'Anthony',
	age: 27,
	fact: 'my favorite color is orange',
	statement() {
		return "My name is " + this.myName + ", " + this.fact + ", " + "and in 10 years I will be " + parseInt(this.age+10, 10) + " years old";
	},
	getOlder(){
		this.age ++;
	},
	changeName() {
		newName = prompt("Please reenter your name");
	}
}


//Greeter
const greeter = {
	hello(nameInput) {
		return "Oh hello there, " + nameInput;
	},
	goodbye(nameInput){
		return "Adios, " + nameInput;
	},
	whoAreYou(nameInput){
		return "Oh right! " + nameInput + " how could I forget..."
	}
}


// Collecting Strings
const stringCollector = {
	collection: [],
	collect(strInput) {
		let reverseStr = strInput.split("").reverse().join('');
		this.collection.push(reverseStr)
	},
	admireCollection(){
		this.collection.forEach((str) => {
			console.log(str)
		})
	}
}


//ATM
const atm = {
	totalCash: 200,
	dispenseTwenties(numOfTwenties) {
		let withdrawlTotal = numOfTwenties * 20;
		if (this.totalCash >= withdrawlTotal) {
			this.totalCash = this.totalCash - withdrawlTotal;
			return withdrawlTotal;
		}
		else{
			return null
		}
	}
}

// Hungry Turtles
const leonardo = {
	name: "leonardo",
	color: 'Blue',
	weapon: "Katana",
	pizzaEaten: false,
	eatPizza() {
		if (this.pizzaEaten === true) {
			console.log(this.name + " has already eaten pizza.");
			this.pizzaEaten = false;
		} else{
			console.log(this.name + " is eating pizza.");
			this.pizzaEaten = true
		}
	}
}


// Calculator
const calculator = {
	output: 0,
	multiply(num1, num2){
		this.output = num1 * num2
		console.log(this.output)
	},
	divide(numerator, denominator){
		this.output = numerator /denominator
		console.log(this.output)
	},
	sum(num1, num2){
		this.output = num2 + num1
		console.log(this.output)
	},
	subtract(numStart, numLess) {
		this.output = numStart - numLess
		console.log(this.output)
	}
}

// Iterators
// forEach

const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach((item) => {
	console.log(item)
})




