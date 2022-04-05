// spread Operator
let arr1 = [1,2,3,4,5,6];
let arr2 = [...arr1,7,8,9] ; // here i make copy of arr1(using spread operator) with additional numbers 
console.log(arr2);


let arr3 = [1,2,3,4];
const add = (a,b,c,d)=>a+b+c+d;
console.log(add(...arr3));  // here i used spread operator as a arguement