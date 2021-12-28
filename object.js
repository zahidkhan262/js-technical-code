console.clear();

// literal object
// let obj = {
//     name: 'zahid',
//     age: 22,
//     city: 'Noida',
//     getDetails: function () {
//         console.log(this.name + " age is " + this.age + " from " + this.city);
//     }
// }

// console.log(obj.name)
// console.log(obj.age)
// obj.getDetails();

// let obj2 = {
//     name: 'khan'
// }

// obj2.__proto__ = obj;



// obj.name
// 'zahid'

// obj.getDetails()
// => o/p zahidage is22fromNoida
// undefined



// obj2.getDetails()
// => o/p khan age is22fromNoida
// undefined



// convert object  to array by using [Object.values()]

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"

// };
// const person = {
//     fname: "John",
//     lname:"doe",
//     age: 30,
//     city: "New York",
//      fullDetail(){
//          return `${this.fname} ${this.lname} age is ${this.age} `
//     }
// };
// console.log(person.fullDetail())

// let myArray = Object.values(person)
// console.log(myArray);

// op=>[ 'John', 30, 'New York' ]

// let a=200_000_0000_000_000_00

// console.log(a)


// javascript object to Json formate using[ JSON.stringify()]

// let JsonFormate = JSON.stringify(person);

// console.log(JsonFormate)
// op=>{"name":"John","age":30,"city":"New York"}



// ECMAScript 5 (ES5 2009) introduced Getter and Setters.

// Getters and setters allow you to define Object Accessors (Computed Properties)

// Getters and setters allow you to get and set object properties via methods.

// This example uses a lang property to get the value of the language property:

// getter and setter 

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "english",
//     salary:120000,
//     get sal() {
//         return this.salary/12;
//     }
// };

// for (obj in person) {
//     document.write(person[obj])
//     document.write("<br>")
// }

// btn.innerHTML = (person.lang);


// // op=> en


// setter


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang(abc) {
//         this.language =abc;
//     }
// };

// Set an object property using a setter:
// let x = person.lang = "hindi";

// document.getElementById("btn").innerHTML = x;



// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     salary: 1000,
//     get lang() {
//         return `this is montholy salary ${this.salary / 12}`;
//     }
// };

// for (i in person) {
//     document.write(`${person[i]}`, '<br>')
// }


// btn.innerHTML = (person.lang);



// create object with constructor method

function employee(ename,age,city){
    this.name=ename;
    this.age=age;
    this.city=city;
    this.getDetail= function(){
        return this.name + "_" +  this.city
    }
}

let obj1=new employee("zahid", 22, "Noida");
console.log(obj1.getDetail())

obj1.nationality="Indian"

let obj2=new employee("yusuf", 25, "Noida")

obj2.nationality="canadian"

// console.log(obj1,obj2)