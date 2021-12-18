let obj = {
    name: 'zahid',
    age: 22,
    city: 'Noida',
    getDetails: function () {
        console.log(this.name + "age is" + this.age + "from" + this.city);
    }
}

let obj2 = {
    name: 'khan'
}

obj2.__proto__ = obj;



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

// let myArray = Object.values(person)
// console.log(myArray);

// op=>[ 'John', 30, 'New York' ]




// javascript object to Json formate using[ JSON.stringify()]

// let JsonFormate = JSON.stringify(person);
// console.log(JsonFormate);

// op=>{"name":"John","age":30,"city":"New York"}



// ECMAScript 5 (ES5 2009) introduced Getter and Setters.

// Getters and setters allow you to define Object Accessors (Computed Properties)

// Getters and setters allow you to get and set object properties via methods.

// This example uses a lang property to get the value of the language property:

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//         return this.language;
//     }
// };
// btn.innerHTML = (person.lang);

// // op=> en


// setter


const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(abc) {
        this.language = abc;
    }
};

// Set an object property using a setter:
let x = person.lang = "english";

btn.innerHTML = x;
