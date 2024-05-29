// singleton

// object literals
const mySym = Symbol("mykey1");
const Jsuser = {
    Name: "Aravind",
    "full name": "Aravind Sagar",
    [mySym]: "mykey1",
    age: 20,
    location: "Hyderabad",
    email: "sagararavind87@gmail.com",
    isLoggedIn: false,
    logindays: ["Monday", "wednesday"]
}

console.log(Jsuser.email);
console.log(Jsuser["location"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email = "2211cs010458@gmail.com"
console.log(Jsuser);

Jsuser.grettings = function(){
    console.log(`hello! Jsuser, ${this.Name} `);
}

console.log(Jsuser.grettings());