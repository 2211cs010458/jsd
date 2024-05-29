// arrays

const myarr = [0, 1, 2, 3, 4, 5]
const heros = ["ram", "ntr", "allu arjun"]
const myarr2 = new Array(1, 2, 3, 4)
console.log(myarr[2]);
console.log(heros);

// array methods 
myarr.push(6)
myarr.push(7)
myarr.pop()
myarr.unshift(8)
myarr.shift()
// includes,index
console.log(myarr.includes(8));
console.log(myarr.indexOf(5));

const newArr = myarr.join()
console.log(newArr);


console.log(myarr);

// slice,splice

console.log("A ", myarr);
const myn1 = myarr.slice(1,4);
console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1,4);
console.log(myn2);
console.log("B ", myarr);