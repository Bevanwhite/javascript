/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// http://localhost/javascript/js/coding%20challenge/part01/
// part 01

const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

const bmiMark = markWeight/markHeight **2;
const bmiJhon = johnWeight/johnHeight **2;

const markHigherBMI = bmiMark > bmiJhon;
console.log(markHigherBMI);


const markHeight2 = 1.88;
const markWeight2 = 95;

const johnHeight2 = 1.76;
const johnWeight2 = 85;

const bmiMark2 = markWeight2/markHeight2 **2;
const bmiJhon2 = johnWeight2/johnHeight2 **2;

const markHigherBMI2 = bmiMark2 > bmiJhon2;
console.log(markHigherBMI2);