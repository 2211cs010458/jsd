const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed");
});

const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000);
});

promiseTwo.then(function() {
    console.log("Async 2 resolved");
});

const PromiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "Aravind", email: "aravind87@gmail.com" });
    }, 1000);
});

PromiseThree.then(function(user) {
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "Aravind", password: "1568" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

const username = promiseFour
    .then((user) => {
        console.log(user.username);
        return user.username;
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "javaScript", password: "1678" });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://2211cs010458.github.io/FacultyList/');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }


// getAllUsers();

fetch ('https://2211cs010458.github.io/FacultyList/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
