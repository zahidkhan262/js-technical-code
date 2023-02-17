let data = [20, 20, 40, 2, 30, 50, 2, 30, 55, 50, 1, 6, 9, 9]

const findDuplicateValue = (arr) => {
    let duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (arr[i] == arr[j]) {
                duplicate.push(arr[j])
            }
        }
    }
    return duplicate
}
console.log(findDuplicateValue(data))

let arr =[1,2,3,4,5]
let obj={...arr}
console.log(obj)
//{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
