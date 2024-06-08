"use strict"

validation(NaN, true);
validation(undefined, true);
validation({}, true);
validation(true, false); 
validation(null,false); 
validation(37,false); 
validation("55",false); 
validation("25.52",false);
validation("",false); 
validation(" ",false); 
validation("99,5",true);
validation(new Date(),false); 
validation(new Date().toString(), true);

function validation(input, expected) {
    let res = customIsNaN(input)
    if(res == expected) {
       console.log("Перевірку пройдено: вхідне значення", input, "результат", res, "очікується", expected)
    } else {
        console.log("Перевірку не пройдено: вхідне значення", input, "результат", res, "очікується", expected)
    }
}

function customIsNaN(value) {
    if (value === null) {
        return false;
    }

    if (value instanceof Date) {
        return !(value.getTime() == value.getTime());
    }

    if (value == undefined || (typeof value === 'object' && Object.keys(value).length === 0)) {
        return true;
    }

    if (typeof value === 'number') {
        return value !== value;
    }

    if (typeof value === 'string' && value.trim() !== '') {
        return !(Number(value) == value);
    }

    return false; 
}