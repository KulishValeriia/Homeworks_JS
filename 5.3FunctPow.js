"use strict"

function pow(numb1,numb2){

    let res = 1;
    for (let i = 1; i <= numb2; i++){
         res = res * numb1;
    }
    return res;
}

let res = pow(0,6);
console.log(res);