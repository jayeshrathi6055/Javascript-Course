// Console statements ------------------------------------------------------------------------------------------>
console.time("Your time is - ")  //------> It will count excecution time.
console.log("Hello sir"); //---->Print String
console.log(80+90);  //-----> calculation
console.log(true); //-----> print boolean
console.log([1,2,5,7,8,9]); //-----> Print array
console.log({jayesh:"rathi",marks:100}); //----->Print dict
console.table({jayesh:"rathi",marks:100}); //-----> Make Table
console.warn("This is a warning"); //-----> Warning message
console.assert(121<120,"It is not possible"); //----->Give an error if condition false.
console.error("It is an error"); //----->Print error
// console.clear(); //----->It will clear console
console.timeEnd("Your time is - "); //------> It will stop count excecution time and display count time.

// Declare Variables-------------------------------------------------------------------------------------------->
// We can change var type of variables
var names = 'Jayesh';
var channel;
channel = "Rathi";
var marks = 100;
console.log(names,channel,marks);

// We cannot change const type of variables
const num = 20;
// a = 30 //------>error
console.log(num);

// "let" is used as assumption but actual it is not
{
    let num = 40;
    console.log(num);
}
console.log(num);

// Datatypes--------------------------------------------------------------------------------------------------------->
// 1. Primitive - String, number, boolean, null, undefined, and symbol.
// 2. Reference - Arrays, Object literals, functions, and dates.

a = "Boss";
console.log("Data type is "+typeof a);

b = 20.20;
console.log("Data type is "+typeof b);

c = true;
console.log("Data type is "+typeof c);

d = null;
console.log("Data type is "+typeof d);

e = undefined;
console.log("Data type is "+typeof e);

f = [1,4,7,8,"hello",true];
console.log("Data type is "+typeof f);

g = {harry: 20,marry: 40,jerry: 80};
console.log("Data type is "+typeof g);

function h() {

}
console.log("Data type is "+typeof h);

date = new Date()
console.log("Data type is "+ typeof date);

// Type Conversion----------------------------------------------------------------------------------------------------->
a = String(50);
console.log(a,typeof a); // Permanent Conversion
b = 20.6;
console.log(b.toString(),typeof b); // Temporary Conversion
c = String(true);
console.log(c,typeof c);
d = String([1,2,5,6,8,9,4]);
console.log(d,typeof d);
e = String(new Date())
console.log(e,typeof e);

f = Number("3431");
console.log(f,typeof f);
g = Number(true);
console.log(g,typeof g);
h = Number([9,8,7,4,5,6])
console.log(h,typeof h);
i1 = parseInt("40.486");
console.log(i1,typeof i1);
j = parseFloat("40.486");
console.log(j,typeof j);
k = 451.3298745;
console.log(k.toFixed());
console.log(k.toFixed(2));
console.log(k.toFixed(6));

l = 34;
m = "45"
console.log(l+m); // Automatically convert number to string for temporary

// String Properties---------------------------------------------------------------------------------------------------->
// Concatination
a = "Hello";
a = a.concat(" Sir,"," How", " are"," you?");
console.log(a);

// Length os string
b = "Jerry";
console.log(b.length);

// Upper case
console.log(b.toUpperCase());

// Lower Case
console.log(b.toLowerCase());

// Indexing
console.log(b[0]);
console.log(b[3]);
console.log(b.charAt(4));

// Find index of word
c = "My name is John and what is your name";
console.log(c.indexOf("is"));
console.log(c.lastIndexOf("is"));

// Check end of string
console.log(c.endsWith("name"));

// Check word is present in a string
console.log(c.includes("and"));

// Want special part from string
console.log(c.substring(11,15));
console.log(c.slice(11,15));

// Break string and convert into a array
console.log(c.split(" "));
console.log(c.split(" is "));

// Replace a word from string
console.log(c.replace(" is","'s"));

// Template Literals
names = "Jordan";
myhtml = `My name is ${names} and you`;
console.log(myhtml);
document.body.innerHTML = myhtml;

// Arrays Properties--------------------------------------------------------------------------------------------------->
let arr = [20,45,"hello",89,"sir"];
console.log(arr);

// Access specific element in a array
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// Length of array
console.log(arr.length);

// Check index of element
console.log(arr.indexOf(89));

// Want to check it is array or not
console.log(Array.isArray(arr));

// Want to change value in a array
arr[3] = "Hi";
console.log(arr);

// Want to add value at end in a array
arr.push(40);
console.log(arr);

// Want to add value at starting in a array
arr.unshift(90);
console.log(arr);

// Want to remove value at end in a array
arr.pop();
console.log(arr);

// Want to remove value at starting in a array
arr.shift();
console.log(arr);

// Want to remove value
arr.splice(1,2);
console.log(arr);

// Reverse an array
arr.reverse();
console.log(arr);

// Add another array
arr1 = [1,2,3,4];
arr = arr.concat(arr1);
console.log(arr);

// Object properties------------------------------------------------------------------------------------------------------>
obje = {"First name":"Jay",channel:"CodewithJay",isActive:true,marks:[80,90,95,100]};
console.log(obje);
console.table(obje);

// Access value
console.log(obje["First name"]);
console.log(obje["channel"]);
console.log(obje.channel);  // you can also write as
console.log(obje.isActive);
console.log(obje.marks);
console.log(obje.marks[0]);
console.log(obje.marks[1]);
console.log(obje.marks[2]);
console.log(obje.marks[3]);

// Make new Key,value
obje['age'] = 18
console.log(obje);

// Want to change value 
obje['First name'] = "Jayesh"
console.log(obje);

// If-Else statement------------------------------------------------------------------------------------------------------->

// ==  ---> It will check both are equal or not
// ===  ---> It will check both are of equal value and type
// !=  ---> Not equals to value
// !==  ---> Not equals to value and type
// && ---> AND 
// || ---> OR 
age = 19;
if (age==18){
    console.log("your age is 18.");
}
else if(age===19){
    console.log("your age is 19.")
}
else{
    console.log("Don't no")
}

// You can also write as-
console.log(age>=18? 'you are adult': 'you are not adult');

// Switch case---------------------------------------------------------------------------------------------------------->
age = 25;
switch (age) {
    case 18:
        console.log("your age is 18")
        break;
    case 20:
        console.log("your age is 20")
        break;
    case 22:
        console.log("your age is 22")
        break;
    case 24:
        console.log("your age is 24")
        break;
    default:
        console.log("your age is unknown")
        break;
}

// loops----------------------------------------------------------------->
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i<10) {
    console.log(i);
    i++;
}

j = 1;
do{
    console.log(j);
    j++;
}while(j<10)

arr = [1,2,3,4,5];
arr.forEach(element => {
    console.log(element);
});
//       or
Array.from(arr).forEach(element => {
    console.log(element);
});
//       or
arr.forEach(function(element){
    console.log(element);
});
//       or
for (let iterator of arr) {
    console.log(iterator);
}
//       and
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});

ob = {first_name:"Jay",isActive:true,last_name:"Rathi"};
for (let key in ob) {
    console.log(key +"--->"+ ob[key]);
}

// Use of "break" and "continue"----------------------------------------------------------------------------------------->
for (let k = 0;k<11;k++){
    if(k === 5){
        continue;
    }
    if(k === 9){
        break
    }
    else{
        console.log(k);
    }
}

// Function----------------------------------------------------------------------------------------------->
function greet(name){
    console.log(`Happy birthday ${name}`);
}
greet("skillf");


function calc(a,b){
    return a+b;
}
c = calc(5,8);
console.log(c);


let obj = function(){
    return "Hi! I am skillf";
}
console.log(obj());


obje = {name:"skillf",game:function()
                            {return "GTA"}};
console.log(obje.game());


function myfunc(a,b){
    console.log(`a is ${a} and b is ${b}`);
}
myfunc(2);
myfunc(2,3);
myfunc(2,4,5);


function fname(a,b){
    // Making Constructor
    this.firstname = a;
    this.lastname = b;
}
c = new fname("Harshid","Mehta");  // Inherit function in c
console.log(c.firstname+" "+c.lastname);


function mul(a,b){
    return a*b;
}
c = mul.call(c,5,4);   // Use of call()
console.log(c);


function mul(a,b){
    return a*b;
}
arr = [5,5]
c = mul.apply(c,arr);  // Use of apply()
console.log(c);


function add(){
    // addition of unlimited values
    result = 0;
    for(i = 0;i<arguments.length;i++){
        result += arguments[i];
    }
    return result;
}
a = add(2,3,4,1);
console.log(a);