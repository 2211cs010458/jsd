function setUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUserName.call(this,username)

    // this.username = username;
    this.email = email
    this.password = password
}

const chai = new createUser("Aravind", " Aravind87@gmail.com", "1567")
console.log(chai)