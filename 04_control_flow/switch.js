// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 3;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("please enter a default value");
        break;
}

const time = 10;
switch (true) {
    case time < 12:
        console.log("Good Morning");
        break;
    case time >= 12 && time < 16:
        console.log("Good Afternoon");
        break;
    case time >= 16:
        console.log("Good evening");
        break;
    default:
        console.log("Greetings");
        break;
}
