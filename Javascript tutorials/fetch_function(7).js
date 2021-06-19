// Use of fetch() ----------------------------------------------------------->
// Get request
let url = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

fetch(url)
    .then(response => response.text())
    .then(json => console.log(json))

// Post Request
url = url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities'
var data = { name: 'jayesh', age: 19 };
var params = {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data)  // It must be in string format
};
fetch(url, params).then(response => response.json()).then(data => console.log(data));