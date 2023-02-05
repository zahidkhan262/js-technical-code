let nums = 5;
const findFactorialNumber = (num) => {
    let factorial = 1
    if (num === 0 || num === 1) {
        return num
    }
    for (let i = 1; i < num; i++) {
        factorial += factorial * i
    }
    return factorial
}
console.log(findFactorialNumber(nums))