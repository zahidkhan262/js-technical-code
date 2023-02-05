let data = [20, 40, 2, 30, 50]

const findFirstLargestNumber = (arr) => {
    let largest = 0
    for (let i = 0; i < arr.length; i++) {
        largest < arr[i] ? largest = arr[i] : null
    }
    return largest
}
console.log(findFirstLargestNumber(data))