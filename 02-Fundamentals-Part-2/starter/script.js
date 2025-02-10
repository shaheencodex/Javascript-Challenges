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
// Write your code below. Good luck! 🙂 

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

 */

// Array
 
const friend1 = 'Shaheen';
const friend2 = 'Nasrin';
const friend3 = 'Juhe';

const friends = ['shaheen', 'Nasrin', 'juhe'];
console.log(friends);

console.log(friends.length);
console.log(friends[friends.length - 2]);


const calcAge = (birthYear) => {
    let age = 2025 - birthYear;
    return age
}

const year = [2020, 2023, 2018, 2021, 2008]

console.log(calcAge(year[0]));
console.log(calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1]));


//push

friends.push('savi')        // added at the last
console.log(friends);

//unshift
friends.unshift('jasmin')   // added at the first
console.log(friends);

//pop
friends.pop()    // removed at last
console.log(friends);

//shift
friends.shift()
console.log(friends);

console.log(friends.indexOf('Nasrin'));
console.log(friends.indexOf('savi'));

console.log(friends.includes('shaheen'));
console.log(friends.includes('dhivya'));


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
console.log(combined);

let sliced = combined.slice(2, 5); // [2, 3, 4]
console.log(sliced)

combined.splice(2, 1, 10); // Replaces 3 with 10 -> [1, 2, 10, 4, 5, 6]



