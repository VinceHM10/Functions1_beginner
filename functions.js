/* Function is a sequence of instructions that enables you 2 pass data 2 d code and get data back from it. A certain closed logical whole, intended to perform a specific task.
D program will calculate and dispaly d mean daily temperature on d basis provided data (24 temperatures, hourly readings for 1 day, starting from midnight).*/
// Declaring d function
function meanTemperature(tmp) { // local variable/s (parameters are optional)
  sum = 0;
  for (let i = 0; i < tmp.length; i++) {
    sum += tmp[i];
  }
  mean = sum / tmp.length;
  return mean;
}
// Calling d function
let temperatures = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 24.3, 23, 20, 19.1, 18, 16.6, 14.6, 13.7, 13.1, 12.5,];
console.log(`Mean daily temperature is: ${meanTemperature(temperatures)}`);

// 2nd example - Login 
function verifyCredentials(username, password) {
  const validated = username;
  const validPassword = password; 
  if (validated === "Vince" && validPassword == 1234) {
    return "Hello chief!";
  } else {
    return "Sorry, not verified.";
  }
};
console.log(verifyCredentials("Vince", 1234)); // you can pass any data as arguments to a functiom (simple and complex)
console.log(verifyCredentials("vince", 1234));
console.log(verifyCredentials("x", 1234));
console.log(verifyCredentials(0, 1234));

/* D ability to store a function in a variable indicates that functions in JS are 1st-class citizens.
When assigning a function to a variable, we don't use a function call operator, as this would execute d function and assign d result of d function to a variable, and not to d function itself.*/
function doNothing() {
  return undefined;
}
let a = doNothing(); // assign result of function call
let b = doNothing; // assign a function
console.log(typeof a); // -> undefined
console.log(typeof b); // -> function

// Diving deeper
function add(a, b) {
     return a + b;
};
function multiply(a, b) {
     return a * b;
};
// Passing a function as a call parameter to another function
function operation(func, first, second) {
     return func(first, second);
};
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200

/* Function expressions are functions that are stored in variables. They can be anonymous or named.
To store a function in a variable or pass it as an argument to call a function, you don't necessarily have to declare it previously and use its name.*/
let myAdd = function (a, b) {// anonymous function
  return a + b;
};
console.log(operation(myAdd, 10, 20)); // -> 30
console.log(operation(function (a, b) { // anonymous function defined directly in d operation call
      return a * b;}, 10, 20)); // -> 200

// My multiplying trick
function multiplyBy(multiplier) {
  return function (a) {
    return a * multiplier;
  };
};
let mulBy3 = multiplyBy(3);
console.log(mulBy3(2)); // -> 6
console.log(multiplyBy(5)(10)); // -> 50 closing: not substituting d returned function into any variable, but I call it immediately with 2 arguments (5)(10)

// Declarative function => a function within an object
const bicycle = {
    gear: 2,
    //setGear: function (newGear) {
    setGear(newGear) {
        "use strict";
        this.gear = newGear; // this anytime u create an obj definition. it refers to d current obj, d 1 created by d function.
    }
};
bicycle.setGear(10);
console.log(bicycle.gear);

/*An arrow function is a shorter form of a function expression. An arrow function expression is composed of:
parentheses containing zero to multiple parameters (if exactly 1 parameter is present, d parentheses can be omitted);
an arrow that looks like this "=>"; and d body of d function, which can be surrounded by curly brackets if d body is longer.
If an arrow function has only 1 statement and returns its value, we can omit d return keyword, as it will be implicitly added.
Arrow functions functions differ from ordinary functions not only in form. They contain inside themselves "lexical scoping":
d method we would define in d form of an arrow will not have access to d properties of d obj using this. We should not use arrow functions to declare obj methods!!!!
Call (), Apply () and Bind () do not apply to arrow functions. Arrow functions not to be used as constructors (i.e. d New operator), and not to be used as methods.*/
// Anonymous function
// var magic = function() {
//     return Date();
// };
// console.log(magic(Date));
/* Anonymous function doesn't have a long-term use or doesn't need to be used in several locations
When u got an anonymous function u can covert it into an ARROW function.*/
const magic = () => Date(); // new Date
console.log(magic(Date)); // new Date

// With parameters
// var concat = function (arr1, arr2) {
//     return arr1.concat(arr2);
// };
// console.log(concat([1, 2], [3, 4, 5]));
const concat = (arr1, arr2) => arr1.concat(arr2);
console.log(concat([1, 2], [3, 4, 5]));

// Higher order ARROW functions (map, filter, reduce - they take functions as arguments 4 processing collections of data)
const realNumArray = [3, 4.13, -98.7, 56, 100, -1];
const squareList = (arr) => {
    const squaredInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); // num and x just var names
    return squaredInt;
};
const squaredInt = squareList(realNumArray);
console.log(squaredInt);
//console.log(squareList(squaredInt)); // find out d solution

// More flexible functions. Default parameter kicks in when d argument is not specified or is undefined.
const increment = (function () { // (!!!
    return function increment(num, value = 1) { // default parameter
        return num + value;
    };
})(); // )!!! then calling it ()
console.log(increment(5, 2));
console.log(increment(5)); // otherwise NaN

// 1 typical example of using arrow functions is the forEach (), available in Array type data.
// This function will be called each time for each element of the array. We can create any function for this purpose.
// There is 1 condition, which is that it must have at least 1 parameter, which will be treated as a visited element of the array.
let names = ['Alice', 'Eve', 'John'];
function showName(element) {
     console.log(element);
}
names.forEach(showName);
/*The showName function has been passed as a call argument to d forEach method of d names array. Therefore, showName will be called 3 times,
for each element of d names array, and in each call its parameter will be equal to d successive name, i.e. in turn: Alice, Eve and John.
D only thing showName has to do is to display d received element (name). D same effect can be achieved by passing an anonymous arrow function to d forEach method.
We do not even store it in a variable, because we assume that we will use it only here and will not refer to it again.*/

// fix it
names1 = () => names.forEach(showName);
console.log(names1);

// /* OOP gives developers d ability 2 extend an object by adding new members. Web developers can extend a JS function as well.
// 2 extend d capabilities of a function, developers use other functions. Using a function 2 inherit d features of another and then extend d new function is called PROTOTYPING.
// This is 1 way in which JS exhibits features of an object - oriented programming language.
// JS differs from other object-oriented languages because it uses functions as d backbone of many of its operations. Web developers call functions in JS 1st-class functions.*/
// // e-commerce site
// var cartTotal = function (cartItems, taxFee, shippingFee, discountAmount) {
//      var total = 0;
//      for (i = 0; i < cartItems.length; i++) {
//           total = total + item[i].cost;
//      }
//      total = (total + taxFee + shippingFee) - discountAmount;

//      return "Your total is "+ total;
// }
// console.log((1,2,3,4)); // check it!!!

