// Regular Expression----------------------------------------------------------->
// It is written between forward slash and is used to search or check word in expression.
// There are five functions of regular expression - exec(), test(), match(), search() and replace().

var reg = /jayesh/;
var global_reg = /jayesh/g;  // g is used to search expression in whole sentence
var case_insensitive_reg = /jayesh/i; // i is used when we want case insensitive
var s = "This code is great by jayesh and jayesh also great";
var global_s = "This code is great by jayesh and jayesh also great";
var case_insensitive_s = "This code is great by jAyesH and jaYeSh also great";

// 1. exec() - it will return object if found else null
var result = reg.exec(s);
var result1 = global_reg.exec(global_s);
var result2 = case_insensitive_reg.exec(case_insensitive_s);
console.log(result);
console.log(result1);  // it will show 1st 
result1 = global_reg.exec(global_s);
console.log(result1);  // it will show 2nd 
console.log(result2);

// 2. test() - it will return true or false
result = reg.test(s);
result1 = global_reg.test(global_s);
result2 = case_insensitive_reg.test(case_insensitive_s);
console.log(result);
console.log(result1);
console.log(result2);

// 3. match() - it will return array or null
result = s.match(reg);
result1 = global_s.match(global_reg);
result2 = case_insensitive_s.match(case_insensitive_reg);
console.log(result);
console.log(result1);
console.log(result2);

// 4. search() - it will return index or null
result = s.search(reg);
result1 = global_s.search(global_reg);
result2 = case_insensitive_s.search(case_insensitive_reg);
console.log(result);
console.log(result1);
console.log(result2);

// 5. replace() - it will replace your expression by another word
result = s.replace(reg, "AMAN");
result1 = global_s.replace(global_reg, "AMAN");
result2 = case_insensitive_s.replace(case_insensitive_reg, "AMAN");
console.log(result);
console.log(result1);
console.log(result2);

// Meta character in regular expression---------------------------------------------->
// 1. ^ ---> It means "startwith"  like /^jay/
// 2. $ ---> It means "endswith"  like /esh$/
// 3. . ---> It means "one character is optional in place of dot"  like /ja.esh/
// 4. * ---> It means "more than 0 character can come in place of *"  like /ja*h/
// 5. ? ---> It means "? after character means that this character is optional"  like /ja?yesh/ here a is optional
// 6. \ ---> It means "disable meta character using \"  like /ja\*yesh/

// Character Sets in regular expression --------------------------------------------->
// It is initialize by []
// 1. [aty] ----> It means "either a, t or y" like /ja[aty]esh/
// 2. [135] ----> It means "either 1, 3 or 5" like /ja[135]esh/
// 3. [^aty] ----> It means "neither a, t nor y" like /ja[^aty]esh/
// 4. [a-z] ----> It means "any character from a to z" like /ja[a-z]esh/
// 5. [0-9] ----> It means "any character from 0 to 9" like /ja[0-9]esh/
// 6. [a-zA-Z] ----> It means "any character from a to z (upper and lower both supports)" like /ja[a-zA-Z]esh/
// 7. [a-z0-9] ----> It means "both character and number can come" like /ja[a-z0-9]esh/

// Quantifiers in regular expression-------------------------------------------------->
// It is initialize by {}
// 1. /jaye{2}sh/ ------> It means "e must be 2 times"
// 2. /jaye{0,4}sh/ ------> It means "e can come minimum 0 and maximum 4"

// Grouping in regular expression
// It is initialize by ()
// /(jay){2}/ ----> It means "jay comes exactly 2 times"

// Shorthand Character classes in regular expression----------------------------------->
// /\war/;    ---------> word character - _ or alphabet or numbers
// /\w+d1r/;      --------->  \w+ means one or more word characters
// /\Wbhai/;      --------->  Non word character
// /\W+bhai/;     --------->  \W+ means more than one Non word character
// /number \d999/;--------->  \d means digit
// /number \d+/;  --------->  \d+ means more than one digit
// /\D999/;       --------->  \D means non digit
// /\D+999/;      --------->  \D+ means more than one non digit
// /\ska number/; --------->  Match whitespace character
// /\s+ka number/;--------->  \s+ means match one or more than one whitespace characters
// /\Ska number/; --------->  Match non whitespace character
// /\S+ka number/;--------->  Match one or more than one non whitespace character
// /4r5r\b/; --------->  word boundary

// Assertions in regular expression----------------------------------------------------->
// /a(?=y)/;  it means "after a is y or not"
// /a(?!y)/;  it means "reverse of above"