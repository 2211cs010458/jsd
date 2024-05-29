const tinderUser = new Object();

// const tinderUser1 = {}
tinderUser.id = "2211cs010458"
tinderUser.name = "Aravind"
tinderUser.age = 20 
tinderUser.isLoggedIn = false
tinderUser.email = "aravind87@gmail.com"
console.log(tinderUser);
// console.log(tinderUser1);

const regularUser = {
    email: "sagararavind87@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aravind",
            lastname: "Sagar",
            Surname: "Pedhabudhi"
        }
    }

}
console.log(regularUser.fullname.userfullname);


const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

// const obj3 = {
    // obj1,
    // obj2
// }
// console.log(obj3);
// const obj3 =Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = { ...obj1,...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const Course ={
    Couresename: "JavaScript",
    CourseInstructor: "Hitesh",
    price: 2000

} 
// console.log(Course);
const {CourseInstructor: Instructor} = Course
console.log(Instructor);