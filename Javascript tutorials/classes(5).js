// Classes in javascript (ES6 syntax)-------------------------------------------------------->
class Employee {
    constructor(name, experience, salary) { // It will look like object literals
        this.name = name;
        this.experience = experience;
        this.salary = salary;
    }
    slogan() { // It will look like prototype object
        return `I am ${this.name}`;
    }
    static add(a, b) { // Without static, it will look like prototype object and with static, it will look like additionl function
        return a + b;
    }
}
let emp = new Employee('jay', 1, 100000);
console.log(emp);

// To access add() with static
console.log(Employee.add(1, 2));

// // To access add() without static
// console.log(emp.add(1,2))  // this time it will give error(because add() is static)


// Inheritance in classes ---------------------------------------------------------------------->
class Programmer extends Employee {
    constructor(name, experience, salary, language) {
        super(name, experience, salary)  // It will call parent class constructor
        this.language = language;
    }
    favoritelanguage() {
        if (this.language == 'python') {
            return 'python'
        }
        else {
            return 'javascript'
        }
    }
    static multiply(a, b) {
        return a * b
    }
}

// This all from child class
new_obj = new Programmer('jay', 1, 100000, 'python');
console.log(new_obj);
console.log(new_obj.favoritelanguage());
console.log(Programmer.multiply(5, 2));
console.log(Programmer.add(1, 2));
// This all from parent class
console.log(emp.favoritelanguage());
console.log(Employee.multiply(5, 2));  // It will give error