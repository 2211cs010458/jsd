// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`

//     }
//     changeUsername (){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Aravind", "Aravind@gmail.com", "157")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password

}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
    
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
   
}


const tea = new User ("Vinod", "Vinod87@gmail.com", "143")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

