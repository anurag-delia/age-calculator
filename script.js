// let input = document.querySelector("#date-input");

// let button = document.querySelector("#btn");

// let year = document.querySelector(".years");
// let month = document.querySelector(".m");
// let days = document.querySelector(".d");

// let birthDate = "";


// button.addEventListener("click", function(){
// birthDate = input.value;
// let age = new Date(birthDate);
// let milisecond = age.getTime();
// let currentDate = new Date().getTime();

// let minus = Math.abs(currentDate - milisecond);

// let finalResult = Math.floor(minus/1000/60/60/24/365);

// let finalResult1 = Math.floor(minus/1000/60/60/24/30);

// let finalResult2 = Math.floor(minus/1000/60/60/24);

// let totalCalculate = document.createElement("p");

// totalCalculate.classList.add("total-age");

// // totalCalculate.innerText = `${finalResult} Years ${}`


// year.textContent=finalResult;

// month.textContent=finalResult1;

// days.textContent=finalResult2;


// })



let input = document.querySelector("#date-input");
let button = document.querySelector("#btn");

let yearEl = document.querySelector(".y"); // years
let monthEl = document.querySelector(".m"); // months
let daysEl = document.querySelector(".d"); // days

button.addEventListener("click", function() {
    let birthDateStr = input.value; // "YYYY-MM-DD"
    if (!birthDateStr) return alert("Please select a date");

    let birthDate = new Date(birthDateStr);
    let today = new Date();

    // Step 1: initial difference
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Step 2: adjust days if negative
    if (days < 0) {
        months--;
        let prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonthDays;
    }

    // Step 3: adjust months if negative
    if (months < 0) {
        years--;
        months += 12;
    }

    // Step 4: show result in DOM
    yearEl.textContent = Math.abs(years);
    monthEl.textContent = Math.abs(months);
    daysEl.textContent = Math.abs(days);

    let total = document.createElement("p");
    total.classList.add("total-age");
    

    total.innerHTML = (`${years} Year ${months} Months ${days} Days`)

    document.querySelector(".conatainer").appendChild(total);
     
});

