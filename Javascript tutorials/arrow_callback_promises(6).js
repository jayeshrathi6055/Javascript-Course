// // Arrow function ------------------------------------------------->

// // Normal function
// function add(a,b){
//     return a+b;
// }

// We can also write that
let add = (a, b) => a + b;
console.log(add(1, 4));
or
let sub = (a, b) => {
    return a - b;
}
console.log(sub(1, 4));

// Callback function---------------------------------------------------------->
console.log('Start');
function multiply(a, b, calllback) {
    console.log('Multiply: ' + a * b);
    calllback(a, b);
}
var mul = multiply(2, 5, (a, b) => { console.log('Divide: ' + b / a) })
console.log('End');

// Promises -------------------------------------------------------------------->
console.log('Before start');
var a = new Promise((resolve, reject) => {
    var value = 20;
    console.log('In between');
    resolve(value);
    reject('Something is not right');
})
a.then(response => console.log(response)).catch(error => console.log(error))
console.log('At last');
