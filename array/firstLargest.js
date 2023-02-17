let data = [20, 40, 2, 30, 50]

const findFirstLargestNumber = (arr) => {
    let largest = 0;
    // ?first way
    // let largest = arr.sort((a, b) => a - b).shift()
    // return largest

    // ?second way
    let max = Math.max(...arr)
    return max


    // ?third way
    // for (let i = 0; i < arr.length; i++) {
    //     largest < arr[i] ? largest = arr[i] : null
    // }
    // return largest



}
console.log(findFirstLargestNumber(data))

// find largest number in array by reduce function
let x= data.reduce((prev,curr)=>{
   if(prev <= curr){
       prev = curr
   }
   return prev
},0)
console.log(x)

// in one line of code largest number by reduce methood
let x= data.reduce((prev,curr)=> prev <=curr ? prev= curr: prev)
console.log(x)
