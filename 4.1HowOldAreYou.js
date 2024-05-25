"use strict";
let years = Number('22');

if (!typeof years && years > 0){
    console.log("Untrue")
};
console.log(years);

let lastNumber = years % 10

if ( years>= 5 && years <=20) {
    console.log(years + " років");
} else if (lastNumber == 1) {
    console.log(years + " рік");
} else if ( lastNumber>= 2 && lastNumber <=4) {
    console.log(years + " роки");
} else {
    console.log(years + " років");
};
