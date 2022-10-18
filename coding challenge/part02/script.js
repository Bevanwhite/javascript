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

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. 
The message can be either "Mark's BMI is higher than John's!" or 
"John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

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
const with2DecBmiMark = bmiMark.toFixed(1)
const with2DecBmiJohn = bmiJhon.toFixed(1)

if(markHigherBMI){
    console.log(`Mark's BMI ${with2DecBmiMark} is higher than John's ${with2DecBmiJohn}!`);
} else{
    console.log(`John's BMI ${with2DecBmiJohn} is higher than Mark's ${with2DecBmiMark}!`);
}


const markHeight2 = 1.88;
const markWeight2 = 95;

const johnHeight2 = 1.76;
const johnWeight2 = 85;

const bmiMark2 = markWeight2/markHeight2 **2;
const bmiJhon2 = johnWeight2/johnHeight2 **2;

const markHigherBMI2 = bmiMark2 > bmiJhon2;
const with2DecBmiMark2 = bmiMark2.toFixed(1)
const with2DecBmiJohn2 = bmiJhon2.toFixed(1)

if(markHigherBMI2){
    console.log(`Mark's BMI ${with2DecBmiMark2} is higher than John's ${with2DecBmiJohn2}!`);
} else{
    console.log(`John's BMI ${with2DecBmiJohn2} is higher than Mark's ${with2DecBmiMark2}!`);
}