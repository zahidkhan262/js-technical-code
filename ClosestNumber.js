let arr1 = [11, 2, 3, 4, 67, 44, 10]

let target = 5;

let findClosest = arr1.reduce((prevElement, currEle) => {
    return (Math.abs(currEle - target) < Math.abs(prevElement - target) ? currEle : prevElement)
})

let sortArr=arr1.sort((a,b)=> return a-b;
          
          console.log(sortArr)

console.log(findClosest);


var val= Number.EPSILON;
var a = 0.1;
var b = 0.2;
var c = 0.3;
var d=a+b-c ==val;
    document.body.innerHTML=d

function randomFunc(ran1, ran2){
    let findRandomNumber = Math.floor(Math.random() * (ran2 - ran1 +1) +ran1)
    return findRandomNumber;
}
console.log(randomFunc(1,6))

// remove second last item from array
let arr1 = [11, 2, 3, 4, 67, 44, 10];

let lastItem = arr1.splice(arr1.length - 2, 1);

console.log(lastItem)

// https://netsuitedocumentation1.gitlab.io/netsuitedocumentation1/SCADeveloper.pdf
