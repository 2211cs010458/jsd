const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id
        }else if(event.target.id === 'white') {
            body.style.backgroundColor = event.target.id
        }else if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id
        }else if (event.target.id === 'orange') {
            body.style.backgroundColor = event.target.id
        }else if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id 
        }else{
            body.style.backgroundColor = 'yellow'
        }

    })
})