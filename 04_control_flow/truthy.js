const userEmail = []
// const userEmail = "Aravind@gmail.com"
// if (userEmail) {
//     console.log("Got your email id");
// }else{
//     console.log("Don't have user email");
// }

// falsy values
// false , 0, -0, BigInt 0n ,"", null, undefined, NaN


// truthy values
// "0", 'false', " ", [],  {}, function(){}, 

if (userEmail.length === 0) {
    console.log("Array is empty");
}else{
    console.log("array has some elements");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// nullish coalescing operator  (??): null, undefined