// Local Storage and Session Storage--------------------------------------------------------------->

// Set Item in local storage
localStorage.setItem('key', 'value')  // it is an object so we have to give key-vlaue pair

// Get item from local stroage
let name = localStorage.getItem('key')
console.log(name)

// Want to clear local storage
localStorage.clear()

// Want to clear particular item from local Storage
localStorage.removeItem('key')

// Want to add an array as a value
localStorage.setItem('fruits', JSON.stringify(['orange', 'apple', 'mango']))
name = JSON.parse(localStorage.getItem('fruits'))
console.log(name)

// All function are same for session storage(it is one time storage because after closing browser, session storage will clear)
sessionStorage.setItem('key', 'value')
name = sessionStorage.getItem('key')
console.log(name)