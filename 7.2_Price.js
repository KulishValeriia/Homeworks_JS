"use strict"

// var services = {
//     haircut: "800 UAH",
//     shaving: "320 UAH",
//     headwash: "135 UAH",
//     price: function() {
//         let sum=0;
//         for (let key in services){
//             if (typeof services[key] != 'function') {
//                     sum += parseInt(services[key]);
//             }
//         }
//         console.log("Total", sum);
//     },
//     minPrice: function() {
//         let min=999999999999999;
//         for (let key in services){
//             if (typeof services[key] != 'function') {
//                     if(min > parseInt(services[key])) {
//                         min = parseInt(services[key])  
//                     }
//             }
//         }
//         console.log("Min", min);
//     },
//     maxPrice: function() {
//         let max=0;
//         for (let key in services){
//             if (typeof services[key] != 'function') {
//                     if(max < parseInt(services[key])) {
//                         max = parseInt(services[key])  
//                     }
//             }
//         }
//         console.log("Max", max);
//     }
// }
        
// services.price();
// services.minPrice();
// services.maxPrice();

// services.coffee = "50 UAH"
// services.braid = "450 UAH"

// services.price();
// services.minPrice();
// services.maxPrice();


var str = '6350.35 uah'
var num = parseInt(str.slice(0, str.indexOf(' ')));
console.log(num)

