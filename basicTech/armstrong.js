let nums = 371;
const makeArmstrongNumber = (num) => {
    let temp = num
    let armNumber = 0;

    // check temp value until zero if above of zero then excute otherwise return 
    while (temp > 0) {
        let remainder = temp % 10
        armNumber += remainder * remainder * remainder
        temp = parseInt(temp / 10)
    }
    return armNumber === num ? `${armNumber} is armstrong ` : `${armNumber} is not armstrong`
}
console.log(makeArmstrongNumber(nums, "is armstrong"))