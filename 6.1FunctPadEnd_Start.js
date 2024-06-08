"use strict"

console.log(pad("qwerty", "+", true, 10));
console.log(pad("qwerty", "+", false, 10));
console.log(pad("qwerty", "+", false, 5));

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
