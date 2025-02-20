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

// Object

const nasrinarray = [
    'Nasrin',
    'Dubai',
    'Homemaker',
    ['shaheen','jasmin','juhe']
]

console.log(nasrinarray);

const shaheen = {
    firstName: 'Shaheen',
    lastName: 'Salma',
    age: 2025 - 1995,
    job: 'Front-end Developer',
    friends:['nasrin','juhe','jasmin','savi']
}

console.log(shaheen);
console.log(shaheen.firstName);
console.log(shaheen['lastName']);
console.log(shaheen['job']);

//console.log with name key

const nameKey = 'Name';

console.log(shaheen['first' + nameKey]);

const interestedIn = prompt('What you want to know about shaheen? choose between firstName,lastName,age,job,friends');
console.log(shaheen[interestedIn]);


if (shaheen[interestedIn]) {
    console.log(shaheen[interestedIn]);
} else {
    console.log('wrong request ! choose between firstName,lastName,age,job,friends');
}

shaheen.location = 'Thanjavur';
shaheen['twitter'] = '@shaheenhaja';
console.log(shaheen);

console.log(`${shaheen.firstName} has ${friends.length} friends and her best friend name is called ${shaheen.friends[0]}`);

// Object Method

const nasrin = {
    firstName: 'Nasrin',
    birthYear: 1995,
    location: 'Dubai',
    job: 'Homemaker',
    hadDrivingLicense: false,
    friends: ['shaheen', 'jasmin', 'juhe'],
    
    // calcAge: function (birthYear) {
    //    return 2025-birthYear;
    //   }
    
    //calcAge: function () {
    //    return 2025 - this.birthYear;
    // }

    calcAge: function () {
        this.age= 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old ${this.job}, and she has ${this.hadDrivingLicense ? 'a' : 'no'} driving license.`
    }
}
console.log(nasrin.calcAge());
console.log(nasrin.getSummary());

// challenge 4
// "Nasrin is 30 years old teacher, and she has a driving license."


// coding challenges 7

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height:1.69,
    calcBMI: function(){
        this.bmi= this.mass/(this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height:1.95,
    calcBMI: function(){
        this.bmi= this.mass/(this.height * this.height);
        return this.bmi;
    }
}

const MARKBMI = mark.calcBMI();
const JOHNBMI = john.calcBMI();

console.log(MARKBMI);
console.log(JOHNBMI);


if(MARKBMI >= JOHNBMI ){

console.log(`${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${john.fullName}'s ${john.calcBMI()}`);
}else {
console.log(`${john.fullName}'s BMI ${john.calcBMI()} is higher than ${mark.fullName}'s ${mark.calcBMI()}`);
} */

// for loop

/* for (let rep = 0; rep <= 10; rep++){
    console.log(`Ravi has ${rep} pushup`)
}

const shaheen = [
    'Thanjavur',
    1995,
    'Front-end Developer',
    'Married',
    true
]

const types = []

for (i = 0; i < shaheen.length; i++){
    console.log(shaheen[i], typeof shaheen[i]);
    types[i] = typeof shaheen[i];
    console.log(types);
}

const year = [1985, 1989, 1995, 1992, 1998, 2007]
const age = []

for (let i = 0; i < year.length; i++){
    age.push(2035 - year[i]);
}

console.log(age);

// loop continue
for (i = 0; i < shaheen.length; i++){
    if (typeof shaheen[i] !== 'string')continue
        console.log(shaheen[i], typeof shaheen[i]);
}

// loop break
for (i = 0; i < shaheen.length; i++){
    if (typeof shaheen[i] === 'number' )break
        console.log(shaheen[i], typeof shaheen[i]);
} */

// backward loop or decrement loop
        
        const shaheen = [
            'Thanjavur',
            1995,
            'Front-end Developer',
            'Married',
            true
        ]
        
        for (let i = shaheen.length - 1; i >= 0; i--){
            console.log(i, shaheen[i]);
}
        
// nested loop or loops in loops

for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`-----Starting exercise ${exercise}`);
    for (let rep = 1; rep < 5; rep++){
        console.log(`weight lifting repetition ${rep}`);
    }
}


for (let i = 1; i <= 5; i++) {  
    for (let j = 1; j <= 5; j++) {  
        console.log(`${i} x ${j} = ${i * j}`);  
    }  
}

// While loop

let rep = 1;
while (rep <= 5) {
    console.log(`lifting weight repetition ${rep}`);
    rep++;
}

console.log();


let dice = 1;

while (dice !== 6) {

    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`you rolled dice ${dice}`);
    
    if (dice === 6) console.log('loop is ended');

}
        