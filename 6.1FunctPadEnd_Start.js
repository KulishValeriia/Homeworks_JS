"use strict"

function pad(str, symb, fromStart, symbCount){
    let strLenth = String(str).length;
    if (strLenth >= symbCount) {
        return str;
    }

    let diff = symbCount - strLenth
    let subStr = String(symb).repeat(diff)
    if(fromStart) {
        return subStr + str;
    } else {
        return str + subStr;
    }
}
//Варіант з лекції
function pad1(string, symbol, count, isBeginning){
    if (count > string.length)
        return (isBeginning) ? symbol.repeat(count - string.length).concat(string) : string.concat(symbol.repeat(count - string.length));
    else
        return string;
}

console.log(pad("qwerty", "+", true, 10));
console.log(pad1("qwerty", "+", 10, true));

console.log(pad("qwerty", "+", false, 10));
console.log(pad1("qwerty", "+", 10, false));

console.log(pad("qwerty", "+", true, 2));
console.log(pad1("qwerty", "+", 2, true));