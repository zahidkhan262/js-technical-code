// console.clear();
// var person = {
//     name:"zahid",
//     age: 23,
//     getAge: function(){
//       return this.age;
//     }
//   }

//   var person2 = {age:  54};
//   let abc=person.getAge.call(person2);

//   console.log(abc)

//   call() method takes arguments separately whereas, apply() method takes arguments as an array.


// function saySomething(age){
//     return `${this.name} ${age}`;
//   }

//   var person4 = {name:  "John"};

//   let abc=saySomething.apply(person4, [23]);
//   console.log(abc)

// bind()

// This method returns a new function, where the value of “this” skeyword will be bound to the owner object, which is provided as a parameter.


// var bikeDetails = {
//     displayDetails: function(brandName){
//     return this.name+ brandName;
//   }
// }

// var person1 = {name:  "Vivek"};

// var abc = bikeDetails.displayDetails.bind(person1, "Bullet");

//curring funtion

// function add (a) {
//     return function(b){
//         return a + b;
//     }
// }
// let abc=  add(3)(4);
// console.log(abc)


// var globalVariable = "Hello world";

// function sendMessage(){
//   return  globalVariable; // can access globalVariable since it's written in global space
// }

// function sendMessage2(){
//   return sendMessage(); // Can access sendMessage function since it's written in global space
// }

// let abc=sendMessage();  // Returns “Hello world”
// let abc2=sendMessage2();  // Returns “Hello world”

// console.log(abc,abc2)

// function awesomeFunction() {
//     var a = 2;

//     var multiplyBy2 = function () {
//         return console.log(a * 2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
//     }
// }
// console.log(a); // Throws reference error since a is written in local scope and cannot be accessed outside

// multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope



// scope chain

// let y=25;
// function favFunction(){
//     let x = 667;
//     var anotherFavFunction = function(){
//       console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
//     }

//   var yetAnotherFavFunction = function(){
//     console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
//   }
//     anotherFavFunction()
//     yetAnotherFavFunction()
// }
// favFunction()



// clouser

// function randomFunc() {
//     var obj1 = { name: "ratnesh" };

//     return function () {
//         console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed

//     }
// }

// var abc = randomFunc(); // Returns a function

// abc();

// This ability of a function to store a variable for further reference even after it is executed, is called Closure.


