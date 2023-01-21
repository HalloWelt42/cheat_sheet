console.clear();

let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]


let words = ["Hello"];
words.push("World");
console.log(words); // ["Hello", "World"]


let person = {name: "John", age: 30};
let people = [person];
people.push({name: "Jane", age: 25});
console.log(people); // [{name: "John", age: 30}, {name: "Jane", age: 25}]


let functions = [];
functions.push(function(){console.log("Hello World")});
functions[0](); // [function(){console.log("Hello World")}]
