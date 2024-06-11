"use strict"

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