const form = document.querySelector('form')

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