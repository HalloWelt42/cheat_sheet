console.clear();

// Beispiel 1: Verwendung von findIndex() mit einer Zahl als Wert:
let numbers = [1, 2, 3, 4, 5];
let index = numbers.findIndex(x => x === 3);
console.log(index); // 2


// Beispiel 2: Verwendung von findIndex() mit einem String als Wert:
let words = ["Hello", "World", "!"];
index = words.findIndex(x => x === "World");
console.log(index); // 1


// Beispiel 3: Verwendung von findIndex() mit einem Objekt als Wert:
let people = [{name: "John", age: 30}, {name: "Jane", age: 25}, {name: "Bob", age: 35}];
index = people.findIndex(x => x.name === "Jane");
console.log(index); // 1


// Beispiel 4: Verwendung von findIndex() mit einem Array als Wert:
let array1 = [1,2,3];
let array2 = [4,5,6];
let combinedArray = array1.concat(array2);
index = combinedArray.findIndex(x => x === 5);
console.log(index); // 4


