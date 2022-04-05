// If we know the upcoming parameter
const add = (a,b)=>{
    return a+b;
}

// If we don't know the upcoming parameter then we use "rest parameter"
// rest parameter is like an array and it is written with 3 dots + variable_name
const add1 = (...items)=>{
    let result = 0;
    for (const iterator of items) {
        result += iterator;
    }
    return result;
}

console.log(add1(1,2,3,4,5));