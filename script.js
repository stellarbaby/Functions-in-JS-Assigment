"use strict";

// Challenge 01 Part 02(01)

// TEST DATA 1

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.92;

let markBMI = markWeight / markHeight **2;
let johnBMI = johnWeight / johnHeight  **2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);


//  TEST DATA 2

let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markWeight2 / markHeight2 **2;
let johnBMI2 = johnWeight2 / johnHeight2 **2;
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI2);
console.log(johnBMI2);
console.log(markHigherBMI2);

// Challenge 02 part 02
// IF ELSE STATEMENT

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's BMI(${johnBMI2})`)
} else {
    console.log(`John's BMI (${markBMI2}) is higher than mark's BMI (${johnBMI2})`);
    }
