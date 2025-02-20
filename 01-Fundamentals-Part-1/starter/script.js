/* let js = "amazing";
if (js === "amazing") alert('JavaScript is FUN');

40 + 10 + 50 - 7;
console.log(40 + 10 + 50 - 7);

console.log('jon');
console.log(23);

let firstName = "shaheen";
console.log(firstName);

// Variable name convention
let jonas_matilda = "jm";
let $function = 27;

let person = "naseem";
console.log(person);

let PI = '3.14';

let myFirstJob = 'programmer';
let myCurrentJob = 'Teacher';

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
console.log(myCurrentJob);

let country = 'India';
let continent = 'Asia';
let population = '1 million';

console.log(country);
console.log(continent);
console.log(population);



true;
console.log(true);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof 22);
console.log(typeof javaScriptIsFun);
console.log(typeof 'Hello');
console.log(typeof false);

javaScriptIsFun = 'yes!';
console.log(typeof javaScriptIsFun);


// undefined

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null);




let age = 29;
age = 30;

const birthyear = 1995;


var name = 'shaheen';
name = 'shaheen';

lastname = 'salma'
console.log(lastname);


// math operators
const now = 2037;
const agenaseem = now - 1992;
const ageshaheen = now - 1995;
const agemarziya = now - 2023;
console.log(agenaseem, ageshaheen, agemarziya);

console.log(ageshaheen * 2, agenaseem / 2, 3 ** 2);

const firstname = 'shaheen';
const lastname = 'salma';

console.log(firstname + ' ' + lastname);

// assignment operator

let x = 10 + 5; // 15
x += 10; // x = x + 10 =25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1

console.log(x);

// Comparision operators

console.log(ageshaheen < agenaseem);
console.log(agemarziya <= 13);

const isFullAge = ageshaheen >= 13;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);
console.log(now - 1991 <= now - 2018);

const averageAge = ageshaheen + agenaseem / 2;
console.log(ageshaheen, agenaseem, averageAge);


// Template Literals

const firstName = 'shaheen';
const year = 1995;
const job = 'Front-end Developer';
const now = 2024;

const shaheenNew = "I'm " + firstName + ', a ' + (now - year)+ ' years old ' +  job
console.log(shaheenNew);

const shaheenNEW = `I'm ${firstName}, a ${now - year} years old ${job}`;
console.log(shaheenNEW);
;
console.log("first\n\middle\n\last");

console.log(`left
center


const age = 16;
const yearsleft = 18 - age;

if (age >= 18) {
    console.log('sarah have adriving license');
} else {
    console.log(`sarah is too young. wait another ${yearsleft} years :)`)
}

const birthYear = 1995;


if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}

console.log(century);


const firstname = 'juhe';

let answer;

if (firstname === 'juhe') {
    answer = 'correct';
} else {
    answer = 'wrong';
}

console.log(answer);



// code challenges 1 and 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂 



if(BMIMark > BMIJohn){
    console.log("Mark's BMI is higher than john's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}



if(BMIMark > BMIJohn){
    console.log(`Mark.s BMI ${BMIMark} is higher than John's ${BMIJohn}`);
}else {
    console.log(`john's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}


//type conversion
const inputYear = "1991";
console.log(inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

const date = 28;
console.log(date);
console.log(date + 2);
console.log(String(date) + 2);

//type corcion
console.log('I am ' + 29 + 'years old')

console.log('1' + '5' + 10);
console.log('1' - 10 - '5');
console.log('10' - 5 + '25');


// falsy values: 0, '', undefined. null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('shaheen'));
console.log(Boolean({}));

const money = 0;

if (money) {
    console.log("Don't waste money");
} else {
    console.log('Get job to earn money');
}

const height = '';

if (height) {
    console.log("this is correct height value")
} else {
    console.log('This is empty string value')
}

const firstname = 'shaheen';

if (firstname) {
    console.log("variable has the value");
} else {
    console.log("variable has no value");
}
    

// Equality operator === or ==

const age = '18';

if (age === 18) console.log('you are just became an adult strict');

if (age == 18) console.log('you are just became an adult loose');

const favourite = Number(prompt("what's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('COOL! 23 is amazing number');
} else if(favourite === 7) {
    console.log('7 is also a cool number');
} else if(favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('why not 23');


// Logical operators

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);
console.log(!hasDriversLicense && hasGoodVision);

if (hasDriversLicense && !hasGoodVision) {
    console.log('sarah is able to drive');
} else {
    console.log('someone else should drive...');
}

const istired = true; // C
console.log(hasDriversLicense && hasGoodVision && istired);

if (hasDriversLicense && hasGoodVision && !istired) {
    console.log('sarah is able to drive');
} else {
    console.log('someone else should drive...');
}
    

// Switch statement

let day = "wenesday";

switch (day) {
    case "monday":
        console.log('start of the week');
        break;
    case "friday":
        console.log('weekend is coming');
        break;
    case "sunday":
        console.log("It's holiday");
        break;
    default :
        console.log("A regular day")
}

if (day === "monday") {
    console.log('start of the week');
} else if (day === "friday") {
    console.log('weekend is coming');
} else if (day === "sunday") {
    console.log("It's holiday");
} else {
    console.log("A regular day")
}
    */

// coding challenges 4

 // const bill = 300;

/* Write your code below. Good luck! 🙂 */

/*let tip;
if (bill >= 50 && bill <= 300) {
    tip=(bill*0.15);
}else {
    tip=(bill*0.2);
} 

const tip=(bill >= 50 && bill <= 300)?(bill*0.15):(bill*0.2);

console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`); */





