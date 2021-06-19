// Async and await ----------------------------------------------------------->
// async will return promise
console.log('start');
async function print(url) {
    console.log('in');
    var response = fetch(url);
    console.log('and');
    response.then(response => response.json()).then(data => console.log(data))
    console.log('out');
}
var n = print('https://jsonplaceholder.typicode.com/todos/1');
n.then().catch()
console.log('complete');

// Async with await 
// await - It is used to pause async function execution until a Promise is fulfilled
console.log('start');
async function getrequest(url) {
    console.log('in');
    var response = await fetch(url);
    console.log('and');
    data = await response.json();
    console.log('out');
    return data;
}
var n = getrequest('https://jsonplaceholder.typicode.com/todos/1');
n.then((response) => console.log(response)).catch((error) => console.log(error))
console.log('complete');