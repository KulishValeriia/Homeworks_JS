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


function Tree(side1, symb){   // Цей все, до чого я змогла додуматись
    symb = symb || '*';
    let i = 9;

    for (let j = 1; j <= side1; j++)
        console.log(symb + i**j)
    }

Tree(9, '+');
