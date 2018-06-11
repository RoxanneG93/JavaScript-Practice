// // Checking the types of variables

// const s1 = 'Hello';
// console.log(typeof s1);
// // Prints out an String

// const s2 = new String('Hello');
// console.log(typeof s1); 
// // Prints out an object

// console.log(window);
// window.alert(1);

//  OBJECT LITERAL
const book1 = {
	title: 'Book One',
	author: 'John Doe',
	year: 2013,
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

// running the funciton in book1 object
// console.log(book1.getSummary());

const book2 = {
	title: 'Book Two',
	author: 'Jane Doe',
	year: 2016,
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
};

// How to get the Values and Keys withing an object
console.log(Object.values(book2));

console.log(Object.keys(book2));


