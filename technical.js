let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [5, 6, 7, 8, 9, 10, 11];

// email validation
// var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

// // prevent from free gmail  account
//  var emailblockReg =
//      /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;

let findInterSection = arr1.filter((ele) => {
    return arr2.includes(ele)
})
let a = -12.411111
console.log(Math.abs(a));
console.log("findInterSection", findInterSection)

const closets = 8;
const numbers = [1, 10, 7, 2, 4, 9];

let closeNumber = numbers.sort((a, b) => {
    return Math.abs(closets - a) - Math.abs(closets - b);
})

console.log(closeNumber.shift());


// recursion countown
// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);


    const closets = 8;
    const numbers = [1, 10, 7, 2, 4, 9];

    let closeNumber = numbers.sort((a, b) => {
        return Math.abs(closets - a) - Math.abs(closets - b);
    })

    console.log(closeNumber.shift());


