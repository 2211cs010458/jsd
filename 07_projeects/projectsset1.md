# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

```javascript
console.log("Aravind")

# project 1
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

```

## project2 solution

```const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`

    }else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`

    }else{
       const bmi = (weight / ((height* height)/10000)).toFixed(2)
    //    show the results
    results.innerHTML = `<span>${bmi}</span>`;
    }
    const h3Elements = document.querySelectorAll('h3');
    h3Elements.forEach((h3) => {
        if (weight < 18.6) {
            h3.innerHTML = 'Underweight';
        } else if (weight >= 18.6 && weight <= 24.9) {
            h3.innerHTML = 'Normal weight';
        } else {
            h3.innerHTML = 'Overweight';
        }
    });


}); 
```

## project 3 solution

```const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleString(); // Corrected variable name
}, 1000);
```

## project 4 solution

```
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuesses.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. The random number was ${randomNumber}.`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is too low');
    } else if (guess > randomNumber) {
        displayMessage('Number is too high');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesses = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
```


## project 5 solution

```
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

## project 6 solution
```
// generate random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
// console.log(randomColor());
let intervalId
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }

    
}
const stopChangingColor = function(){
    clearInterval(intervalId)
}
document.querySelector('#start').addEventListener('click' , startChangingColor)
document.querySelector('#stop').addEventListener('click' , stopChangingColor)


```
