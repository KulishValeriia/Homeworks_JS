"use strict"

// let totalSumm = 0;
// for (let i = 1; i < 101; i++){
//     if (i % 3 != 0) {
//         totalSumm += i;
//     }
// }

// console.log(totalSumm);

function Sum(from, to){
    let totalSumm = 0;
    for (let i = from; i <= to; i++){
        if (i % 3 != 0) {
            totalSumm += i;
        }
    }
    
    console.log(totalSumm);
}

Sum(1,100);