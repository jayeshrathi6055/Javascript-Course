// Constructor in JS to make Global object------------------------------------->
function car(carName, carSpeed) {
    this.name = carName
    this.speed = carSpeed
    this.info = function () {
        console.log(`Your car name is ${this.name} and speed is ${this.speed}.`)
    }
}

let car1 = new car('maruti', 100);


// Use of prototype and inheritance in constructor  (Old syntax)---------------------------------------------------->
function Employee(name, salary ,experience){ //---------->Making constructor
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
Employee.prototype.slogan = function(){  //---------->Making prototype object (prototype - present in every object)
    return `This company is the best . Regards ${this.name}`; 
}
var obje = new Employee('Jayesh',100000,1)
console.log(obje);
console.log(obje.slogan);

function Programmer(name,salary,experience,language){  // Inheritance of object (parent fuction of this function is Employee)
    Employee.call(this,name,salary,experience); // Calling Employee
    this.language = language;
}

var obje = new Programmer('Jayesh',100000,1,'javascript'); // It not contain prototype of Employee
console.log(obje);

//Inheritance of prototype
Programmer.prototype = Object.create(Employee.prototype)
var obje = new Programmer('Jayesh',100000,1,'javascript'); // Now, it contain prototype of Employee
console.log(obje);

// Set the constructor(programmer) in object
Programmer.prototype.constructor = Programmer;
var obje = new Programmer('Jayesh',100000,1,'javascript'); // Now, it contain prototype of Employee
console.log(obje);