const button = document.querySelector("button");
const month = document.querySelector(".mth");
const monthParent = document.querySelector(".month");
const yearParent = document.querySelector(".year");
const dayParent = document.querySelector(".day");
const year = document.querySelector(".yr");
const day = document.querySelector(".dy");

button.addEventListener("click", function() {
   
   
    const d = new Date();
    yearAge = d.getFullYear();
    monthAge = d.getMonth();
    dayAge =d.getDate();

    const monthInput = document.querySelector("#month").value;
    const yearInput = document.querySelector("#year").value;
    const dayInput = document.querySelector("#day").value;

    typeof month;

    year.innerHTML = yearAge-yearInput;
    if(year.innerHTML <= 1) {
        yearParent.innerHTML ="year";
    } else {
        yearParent.innerHTML ="years";
    }

    month.innerHTML = (12 - monthInput)+ monthAge + 1;
    if(month.innerHTML == 12) {
        month.innerHTML = 0;
        monthParent.innerHTML ="month";
    } else if (month.innerHTML == 13) {
        month.innerHTML = 1;
        monthParent.innerHTML ="month";
    } else {
        monthParent.innerHTML ="months";
    }
    day.innerHTML = dayInput - dayAge;
    if(day.innerHTML <= 1) {
        day.innerHTML = 0;
        dayParent.innerHTML ="day";
    } else {
        dayParent.innerHTML ="days";
    }
})