// Throw intentionally error--------------------------------------------->
// Throw inbuilt error
var a = 3;
if (a > 5) {
    console.log('You are greater');
}
else {
    console.log('You are less');
    throw ReferenceError;   // Here you can throw error intentionally
}

// Make error
err = new Error('Value is less than 5');
if (a > 5) {
    console.log('You are greater');
}
else {
    console.log('You are less');
    throw err;
}
//          or
if (a > 5) {
    console.log('You are greater');
}
else {
    console.log('You are less');
    throw new Error('You are making error');
}

// Error Handling-------------------------------------------------------------->
try {
    console.log('Inside try block');
} catch {
    console.log('If error in try block then catch block print');
} finally {
    console.log('It is mandatory to print because i am finally block');
}