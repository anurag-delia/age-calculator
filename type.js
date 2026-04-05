let age = new Date("2004-09-06");

let date = age.getTime();

console.log(date);


let currentDate = new Date().getTime();

console.log(currentDate);


let minus = Math.abs(date - currentDate);

console.log(minus);

let finalResult = minus/1000/60/60/24/365;

console.log(`Your Age is ${finalResult}`);


let finalResult1 = minus/1000/60/60/24;

console.log (Math.floor(finalResult1)+ " Day");



let finalResult2 = minus/1000/60/60/24/7;

console.log (Math.floor(finalResult2)+ " Week");


let finalResult3 = minus/1000/60/60;

console.log (Math.floor(finalResult3)+ " hours");



let finalResult4 = minus/1000/60;

console.log (Math.floor(finalResult4)+ " Minutes");


let finalResult5 = minus/1000;

console.log (Math.floor(finalResult5)+ " Seconds");