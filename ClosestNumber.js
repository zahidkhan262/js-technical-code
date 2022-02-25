let arr = [11, 2, 3, 4, 67, 44, 10]

let target = 5;

let findClosest = arr.reduce((prev, curr) => {
    return (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev)
})
console.log(findClosest);