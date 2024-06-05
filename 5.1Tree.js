"use strict"

// let i = 9
//     for (let j = 1; j <= 21; j++){
//         console.log(i ** j);
// }

// function Tree(side1, symb){  /*Цей варіант мені підказали, але він не відповідає умовам задачі:Не використовувати функції або інші матеріали які
// ми не вивчали. Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки*/ 
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
