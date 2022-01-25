// convert string to integer

let strToInteger = '15'
strToInteger = +strToInteger

console.log(strToInteger)

// convert Intger to string

let intToString = 12;

console.log(typeof (intToString + ""))


// (function (a) {
//     return (function () {
//         console.log(a);
//         a = 6;
//     })()
// })(21);



// What will be the output of the following code snippet?
let abc=function solve(arr, rotations) {
    if (rotations == 0) return arr;
    for (let i = 0; i < rotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    return arr;
}
console.log(abc)
