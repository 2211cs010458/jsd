// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023 , 0, 4 );
console.log(myCreatedDate.toDateString());


console.log(myCreatedDate.toLocaleString);

let myTimeStamp = Date.now();
console.log(Math.floor(Date.now()/1000));