"use strict";

var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// array1.sort(myBlend)

// function myBlend(){
//     return Math.random() - 0.5;
//     }
// console.log(array1);

function myBlendNew(array) {
        // Перемішуємо масив у зворотному порядку
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Змінюємо місцями елементи
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

myBlendNew(array1)
console.log(array1);