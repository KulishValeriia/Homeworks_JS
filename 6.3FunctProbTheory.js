"use strict"

checkProbabilityTheory(20)


function checkProbabilityTheory(count) {
    let min = 100;
    let max = 1000;

    let evenCount = 0;
    let oddCount = 0;
   
    for (let i = 0; i < count; i++) {
        let num = getRandomInt(min, max)
        if (num % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPerc = evenCount*100/count;
    let oddPerc = oddCount*100/count;
    let oddToEven = evenCount*100/oddCount;

    console.log("Кількість згенерованих чисел: кількість чисел", count);
    console.log("Парних чисел: кількість парних чисел", evenCount);
    console.log("Не парних чисел: кількість не парних чисел", oddCount);
    console.log("Відсоток парних", evenPerc, "%");
    console.log("Відсоток не парних", oddPerc, "%");
    console.log("Відсоток парних до не парних", oddToEven, "%");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
