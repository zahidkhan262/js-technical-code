let arr1 = [11, 2, 3, 4, 67, 44, 10]

let target = 5;

let findClosest = arr1.reduce((prevElement, currEle) => {
    return (Math.abs(currEle - target) < Math.abs(prevElement - target) ? currEle : prevElement)
})

console.log(findClosest);
