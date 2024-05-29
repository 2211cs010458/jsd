// functions

function saymyName(){
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("D");

}
saymyName()

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;

}
const result = addTwoNumbers(5,34);
console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return  `${username} just logged in`

}

console.log(loginUserMessage());

function calculateCardPrice(...num1){
    return num1
}
console.log(calculateCardPrice(200,300,400,500));


const user = {
    username: "Aravind",
    email: "aravind87@gmail.com"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and email is ${anyObject.email}`);

}
// handleObject(user)
handleObject({
    username: "Aravind",
    email: 399
})


const newArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[3];
    

} 
console.log(returnSecondValue(newArray));