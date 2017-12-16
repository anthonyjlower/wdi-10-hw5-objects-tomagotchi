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











