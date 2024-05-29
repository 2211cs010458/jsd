class User {
    constructor(username){
        this.username = username
    }
    logMe (){
        console.log(`username is ${this.username}`);
    }

}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
   }
   addCourse(){
    console.log(`A new course was added by ${this.username}`);
    console.log(`An email is created by ${this.email}`);
   }
}

const chai = new Teacher("Aravind", "Aravind87@gmail.com", "143")

chai.addCourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()
console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
