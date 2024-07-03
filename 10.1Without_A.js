"use strict";
    
const text = 'techniques are based on practical AApproaches that a';
const pattern = /[^Aa^\s]{6,}/g

const result = text.match(pattern);
console.log(result);