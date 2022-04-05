let obj = {name:"Jayesh",age:19,skill:"skillf"};

// Object destructuring
// Method 1
let {name,age,skill} = obj;
console.log(name,age, skill);

// Method 2
({name,age,skill}) = obj;
console.log(name,age, skill);

// Method 3
let {name:myname,age:myage,skill:myskill} = obj;
console.log(myname,myage,myskill);
