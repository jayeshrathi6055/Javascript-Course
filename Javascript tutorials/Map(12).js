// Map ------------------------------------------------------------------->
var mymap = new Map()
// Set value in mymap
mymap.set("name","Jayesh");
mymap.set("skill","skillf");
console.log(mymap);
// Get value in mymap
var getting = mymap.get("name");
console.log(getting);
// Delete value in mymap
mymap.delete("skill");
console.log(mymap);
// check value is present or not
var bool = mymap.has('name');
console.log(bool);
// check size of the object
console.log(mymap.size)
// Clear whole object
mymap.clear();
console.log(mymap);

// loops in Map()
var mymap = new Map(["name","jayesh"],["skill","skillf"])
// You can loop using for..of to get keys and values
for (let [key, value] of mymap) {
    console.log(key, value);
}

// Get only keys
for (let key of mymap.keys()) {
    console.log('key is ', key);
}

// Get only values
for (let value of mymap.values()) {
    console.log('value is ', value);
}

var allValue = Array.from(mymap);
console.log(mymap);