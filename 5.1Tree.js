"use strict"


// function Tree(side1, symb){ 
//     symb = symb || '*';
//     let i = 9;

//     for (let j = 1; j <= side1; j++){
//         let count = String(i ** j).length  
//         let s = ""
//         for (let c = 0; c < count; c++) {
//              s+=symb
//         }
//         console.log(s)
//     }
// }
// Tree(8, '+'); 


// function Tree(side1, symb){   // Цей все, до чого я змогла додуматись
//     symb = symb || '*';
//     let i = 9;

//     for (let j = 1; j <= side1; j++)
//         console.log(symb + i**j)
//     }

// Tree(9, '+');

//Варіанти з лекції
function drawTriangle(height, symbol){
    let tmp = symbol;
    for (let i = 0; i < height; i++){
        console.log(tmp);
        tmp += symbol;
    }
}
drawTriangle(9, '+')

// function drawTriangle2(height1, symbol1){
//     let tmp1 = symbol1;
//     for (let i = 0; i < height1+2; i++){
//         console.log(' '.repeat(height1--) + tmp1);
//         tmp1 += symbol1 + symbol1;
//     }
// }
// drawTriangle2(4, '*')