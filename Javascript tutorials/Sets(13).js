// Sets ----------------------------------------------------------------------------------->
var myset = new Set();  // It will remove duplicates
// add value in Set
myset.add('hello');
myset.add('how');
myset.add('are');
myset.add('you');
console.log(myset);
// Check value is present or not
console.log(myset.has('are'));
// Delete any value
myset.delete('you');
console.log(myset);
// check size of the array
console.log(myset.size);
// Clear whole set
myset.clear();
console.log(myset);

// loops in Set()
var myset = new Set(['hello','how','are','you']);
myset.forEach((element)=>{
    console.log(element);
})

for (const iterator of myset) {
    console.log(iterator);
}

Array.from(myset).forEach((element)=>{
    console.log(element);
});
