let data = [20, 40, 2, 30, 50, 60]

const secondLargestNumber = (arr) => {
    // let d = arr.sort((a, b) => a - b).length - 2
    // return arr[d]
    let d = arr.sort((a, b) => a - b).slice(-2).shift()
    return d
}
console.log(secondLargestNumber(data))