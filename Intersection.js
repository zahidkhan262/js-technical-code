// find the intersection number b/w two array
let arr1 = [11, 2, 3, 4, 67, 44, 10]
let arr2 = [11, 2, 7,8,9,10]

let intersectNumber=arr1.filter((value)=>arr2.includes(value))
console.log(intersectNumber);



let intersectNumber=arr1.filter((value)=>{
    return arr2.indexOf(value) !== -1
})
console.log(intersectNumber);



