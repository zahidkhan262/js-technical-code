// let arr=[1,2,3,4,5];

// push,pop,shift,unshift,splice,split


// let abc=arr.push(6) //push add in the last index of the array

// let abc=arr.pop() //pop remove from last index of array

// let abc=arr.shift() // remove first element from array

// let abc=arr.unshift(0) //add elemnt from 0 index

// console.log("apply method: ",abc)
// console.log("new array: ",arr)




let arr1 = [1, 5, 3, 4, 2];

// let abc=arr1.splice(0,3)
// let abc=arr1.slice(3)


// let abc=arr1.sort()
// let abc=arr1.reverse()

// console.log(abc)

// console.log(arr1)

let filterData = arr1.filter((items) => {
    return items === 3;
})
console.log(arr1)
console.log(filterData)