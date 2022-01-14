// what is prime number?
// which no diveded by 1 or iteself also called prime number

let user = 7;
let isPrime = true;


for (i = 2; i < user; i++) {
    if (user % i == 0) {
        isPrime = false;
        break;
    } 
}
if (isPrime== true) {
    console.log(user, "is prime number")
} else {
    console.log(user, "is not prime number")
}