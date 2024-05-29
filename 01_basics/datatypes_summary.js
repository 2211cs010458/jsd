// # Primitive

// 7 types: String, number, boolean, null(empty),undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.4;
const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id =  Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id===anotherId);

const bigNumber = 1234567898902n





// Reference (non-Premitive)

//  Arrays,Objects, Functions, 

const heros = ["Allu arjun","NTR","Ram"]
let myObj = {
    name: "Aravind",
    age: 20,
}



const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);


// stack(primitive), heaps (non primitive)
let  myname = "Aravind"

let anothername = "myname";
anothername = "Vinod";
console.log(myname);
console.log(anothername);

let useOne = {
    emailId: "aravind.com",
    upi: "user@123"
}