/*
Современный учебник по JavaScript - https://learn.javascript.ru/
W3School JavaScript Tutorial - https://www.w3schools.com/js/default.asp
MDN Web Docs JavaScript - https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps
YouTube также будет полезен, довольно много видео по основам.
*/


function myFunction(a,b){
    console.log(a+b)
}

let num1 = 120;
let num2 = 0.0001;
console.log(num1);
console.log(num2);
console.log(num1 + num2);

// infinity - 1/0
// NaN - (not a number) text/5

let age = 18;
let userName = "Max"
let text = `${userName} is ${age} years old` 

console.log(text)

let user = {
    name:"igor",
    surname:"ivanoff",
    age:25
};
alert(user.name);
alert(user.surname);
alert(user.age);

userName = "alex";
alert(userName);