// Manipulating Website function----------------------------------------------------------------------------->
a = window;
console.log(a);

alert("You are hacked");
prompt("What is your name");
confirm("Are you ok");
a = innerHeight;
a = innerWidth;
a = scrollX;
a = scrollY;
a = location;
a = location.href;
location.href = "//google.com";
location.reload();
a = location.toString();
history.go(-1);
history.go(1);

console.log(a);

// To view HTML code---------------------------------------------------------------------------------------->
b = document;
console.log(b);
b = document.all;
console.log(b);

// Element Selector
// 1. Single element selector
let element = document.getElementById('myfirst');
console.log(element);
element = element.className;
console.log(element);
element = element.childNodes;
console.log(element);
element = element.parentNode;
console.log(element);
element.style.color = "red";
element.innerText = "Hello J";
element.innerHTML = "Hello sir";
console.log(element.innerText);

let sel = document.querySelector('#myfirst');
console.log(sel);
sel = document.querySelector('.child');
console.log(sel);
sel = document.querySelector('div');
console.log(sel);

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child'));
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = "blue";
})

// Children, Parent and Traversing the DOM--------------------------------------------->

// Limitation of childnodes ---> It contains unwanted new line, comments etc.
// To avoid this problem we use 'children'.

let cont = document.querySelector(".container");
console.log(cont.children);

// Use of firstElementChild
cont.firstElementChild();

// Use of lastElementChild
cont.lastElementChild();

// Use of childElementCount
cont.childElementCount();

// Use of nextElementSibling
cont.firstElementChild.nextElementSibling();


// Creating, Removing and Replacing Elements-------------------------------->

// Creating Element
let element = document.createElement('li')
element.className = "childul"
element.id = "childul"
element.setAttribute('title', 'mytitle')
element.innerText = "this is created element by me."
console.log(element)

// Append Element
let ul = document.querySelector('ul')
ul.appendChild(element)

// Replace Element and child
elem2 = document.createElement('h1')
elem2.className = 'elems'
elem2.id = 'elems'
elem2.innerText = 'this is elem2'
element.replaceWith(elem2)

let myul = document.getElementById('fui')
myul.replaceChild(element, document.getElementById('lui'))

// Remove Element and child
myul.removeChild(document.getElementById('lui'))

document.getElementById('fui').remove()

// Check and remove Attribute
element.getAttribute('id')   // it will give id
element.hasAttribute('id')   // it will give boolean
element.removeAttribute('id') // it will remove attribute


// Event and Event Object------------------------------------------------->

// Use of addEventListener()
document.getElementById('heading').addEventListener('click', function(e) {
    console.log("you clicked on heading")
})

// Want to prevent to submit form
document.getElementById('btn').addEventListener('click', function (e) {
    console.log('You clicked on button')
    e.preventDefault()
})

// Events ----> click, dblclick, mousedown, mouseenter, mouseleave, mousemove etc.
