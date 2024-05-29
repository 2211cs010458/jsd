// const clock = document.getElementById('clock')

//const clock = document.querySelector('#clock)

// let date = new Date()
// console.log(date.toLocaleDateString());


const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleString(); // Corrected variable name
}, 1000);
