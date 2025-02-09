// activating strict mode

/* "use strict";

let hadDriving = false;
const passtext = true;

if (passtext) hadDriving = true;
if (hadDriving) console.log('I have driving licence');

// const interface = 'Audio';
// const private = '534'; 

function logger() {
    console.log('my name is shaheen');
}

logger()
logger()
logger()

function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = `Juice with ${apple} apples and ${orange} oranges`;
    return juice;
}

const applejuice = fruitProcessor(7, 5);
console.log(applejuice);

// function declaration

function callage1(birthYear) {
    return 2037 - birthYear;
}

const age1 = callage1(1992);
console.log(age1);

// function expression 
const callage2 = function (birthyear) {
    const ages = 2037 - birthyear;
    return ages;
}

const age2 = callage2(1990);
console.log(age2);

*/

// Arrow function
const callage2 = birthyear => 2037 - birthyear;

const age2 = callage2(1995);
console.log(age2);

const yearUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1995, 'shaheen'));


// code solution 5
/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1,score2,score3) => {
    const averagescore = (score1+score2+score3)/3;
     return averagescore
 }
 
 let scoreDolphins = calcAverage(85,54,41);
 let scoreKoalas = calcAverage(23,34,27);
 
 console.log(scoreDolphins);
 console.log(scoreKoalas);
 
 const checkWinner = function(avgDolphins,avgKoalas){
     if (avgDolphins >= 2 * avgKoalas){
         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
     }
     else if (avgKoalas >= 2 * avgDolphins){
         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
     } else {
         console.log('no team wins...');
     }
 }
 
 checkWinner(scoreDolphins,scoreKoalas);
 
 scoreDolphins=calcAverage(44,23,71);
 scoreKoalas=calcAverage(65,54,49);
 
 console.log(scoreDolphins,scoreKoalas);
 checkWinner(scoreDolphins,scoreKoalas);
