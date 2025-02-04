// activating strict mode

/* "use strict";

let hadDriving = false;
const passtext = true;

if (passtext) hadDriving = true;
if (hadDriving) console.log('I have driving licence');

// const interface = 'Audio';
// const private = '534'; */

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