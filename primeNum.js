// what is prime number?
// which no diveded by 1 or iteself also called prime number

// let user = 7;
// let isPrime = true;


// for (i = 2; i < user; i++) {
//     if (user % i == 0) {
//         isPrime = false;
//         break;
//     } 
// }
// if (isPrime== true) {
//     console.log(user, "is prime number")
// } else {
//     console.log(user, "is not prime number")
// }

let userInput = ""
let showData = document.getElementById('showData')
document.getElementById("search").onkeyup = function () {
    userInput = this.value;
    
    
    
    
    let isPrimeNumber = true;

    if (userInput == 1) {
        showData.innerHTML = `${userInput}= is prime and composite number..`
    }
    else {
        for (i = 2; i < userInput; i++) {
            if (userInput % i == 0) {
                isPrimeNumber = false;
            }
        }
        if (isPrimeNumber) {
            showData.innerHTML = `${userInput}= is Prime number`
        } else {
            showData.innerHTML = `${userInput}= is not Prime number`

        }
    }
}