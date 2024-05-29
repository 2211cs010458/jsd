const user = {
    username: "Aravind",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username},welcome to the website`);
        console.log(this);
    }
}
user.welcomeMessage()

user.username = "Ram";
user.welcomeMessage()


// function hello(){
//     let username = "Aravind"
//     console.log(this.username);

// }

// hello()

// const hello = function(){
//     let username = "Aravind"
//     console.log(this.username);
// }

const hello = () => {
    let username = "Aravind"
    console.log(this);
}


hello()

// const addTwo = (num1 , num2) => {
//     return num1 + num2

// }
const addTwo = (num1 , num2) => ( num1 + num2)
console.log(addTwo(5,8));

const myArray = [2, 3, 4, 5 , 6, 7 ]