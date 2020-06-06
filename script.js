// question 1
// Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

// your answer for question 1 goes here
var petArray = ["cat", "cow", "dog"];

// question 2
// Console log the value of the second item in petArray.

// your answer for question 2 goes here
console.log(petArray[1]);

// question 3
// Add the item "sheep" to petArray using the push method.

// your answer for question 3 goes here
petArray.push("sheep");

// question 4
// Console log how many items there are now in petArray using the length method.

// your answer for question 4 goes here
console.log(petArray.length);

// question 5
// Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.

// your answer for question 5 goes here
var catObject = {
  name: "Casper",
  colour: "black",
  age: 2,
};

// question 6
// Console log the value of the third property of catObject.

// your answer for question 6 goes here
console.log(catObject.age);

// question 7
// Take the value of catObject (the {} part) and place it inside an array called catArray.

// your answer for question 7 goes here
var catArray = [
  {
    name: "Casper",
    colour: "black",
    age: 2,
  },
];

// question 8
// Loop through catArray and console log each property of each object inside (there will be only 1 object inside).

// your answer for question 8 goes here
for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i]);
}

// question 9
// Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.

// your answer for question 9 goes here
function logToConsole(theAnimal) {
  console.log(theAnimal);
}

// question 10
// Call the logToConsole function and pass in the value "donkey".

// your answer for question 10 goes here
logToConsole("donkey");
