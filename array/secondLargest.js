let data = [20, 40, 2, 30, 50, 60]

const secondLargestNumber = (arr) => {
    let d = arr.sort((a, b) => a - b).length - 2
    return arr[d]

}
console.log(secondLargestNumber(data))