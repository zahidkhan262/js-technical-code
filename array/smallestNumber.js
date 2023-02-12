let data = [20, 40, 2, 30, 50, 60]

const findSmallestNumber = (arr) => {
    // let small = 1
    // ?first way
    let small = arr.sort((a, b) => a - b).shift()
    return small

    // ?second way
    let min = Math.min(...arr)
    return min

}
console.log(findSmallestNumber(data), "smallest number")
