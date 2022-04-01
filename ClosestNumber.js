let arr1 = [11, 2, 3, 4, 67, 44, 10]

let target = 5;

let findClosest = arr1.reduce((prevElement, currEle) => {
    return (Math.abs(currEle - target) < Math.abs(prevElement - target) ? currEle : prevElement)
})

let sortArr=arr1.sort((a,b)=> return a-b;
          
          console.log(sortArr)

console.log(findClosest);


// https://netsuitedocumentation1.gitlab.io/netsuitedocumentation1/SCADeveloper.pdf
