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


// Map
const more_words = ["Joe", "Overeats", "Eggs"];

let newArray = more_words.map((str) => {
	return str[0]
})


// reduce

const arr = [8, 8, 8, 8, 8, 8, 8, 8];

let product = arr.reduce((a,b) => {
	return a*b
})	


// Chaining
const sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];
	


const totalSheered = sheepShearers.map((person) =>{
	//Create an array out of the objects in sheepShearers
	return	person
}).map((count) =>{
	//Create an array containing only the sheep count value 
	return count.sheepCount
}).reduce((a,b) =>{
	// add all of the sheep counts together
	return a+b
})

// HUNGRY FOR MORE

//For Each

const gizmo = {start: 10, end: 6, location: "remote", type: "wdi"};

//get an array of all of the keys in the object gizmo
const key = Object.keys(gizmo)
//iterate through the array of keys
key.forEach((item)=>{
	//print the value of each attribute
	console.log(gizmo[item])
})


//Reduce

const newArr = [[8, 8], ["eight", "eight"], ["ate"]];


const flattenedArr = newArr.reduce((a, b) => {
	return a.concat(b)
},[])
console.log(flattenedArr)



//Chaining

const stocks = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];


let filteredStockSymbols = stocks.filter((stockTicker)=>{
	return stockTicker.price >= 150
}).map((goodStocks)=> {
	return goodStocks.symbol
}).forEach((goodStockSymbol)=> {
	console.log(goodStockSymbol)
})


















