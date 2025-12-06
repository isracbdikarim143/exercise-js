const strings = ["apple", "banana", "cherry"];

// Using map to split each string into an array of characters
const characters = strings.map(str => str.split(''));

console.log(characters);