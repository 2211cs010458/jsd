
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}
console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Aravind"

    function two(){
        const website = "cgatgpt"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if (true){
    const username = "Aravind"
    if(username === "Aravind"){
        const website = " chatgpt"
        console.log(username + website);
    }
}

// ++++++++++++++++++++++++intreesting+++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(2))