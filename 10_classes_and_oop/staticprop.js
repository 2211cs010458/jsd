class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);

    }
    static createId(){
        return `143`
    }

}
const Aravind = new User("Aravind")
// console.log(Aravind.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "i@phone")
console.log(iphone);