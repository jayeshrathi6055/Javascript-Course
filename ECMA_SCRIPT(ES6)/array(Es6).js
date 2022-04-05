let arr = ['Jayesh','19','skillf'];

// Array destructuring
let [name,age,skill] = arr;
console.log(name,age,skill);

// Want to destructure only last element
let [,,skills] = arr;
console.log(skills);