const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 458.99
console.log(otherNumber.toPrecision(3));

const hundred = 10000000

console.log(hundred.toLocaleString);

console.log(hundred.toLocaleString('en-IN'));



// +++++++++++++++++Maths+++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));// absolute
console.log(Math.round(4.7));
console.log(Math.ceil(4.7));
console.log(Math.floor(4.7));
console.log(Math.min(2,4,1,7));
console.log(Math.max(2,4,1,7));

console.log(Math.random());
console.log((Math.random() * 10 ) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);