const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discriptor);

// console.log(Math.PI);

const chai = {
    name: "lemon tea",
    price : 250,
    isAvailable: true,
    orderChai : function(){
        console.log("chai nhi bhi");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: false,
    // configurable: true
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key, value] of Object.entries(chai)) {

    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);

    }
}

