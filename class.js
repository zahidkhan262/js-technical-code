class car {
    constructor(door, mirror, engine) {
        this.door = door;
        this.mirror = mirror;
        this.engine = engine;
    }


    carStats() {
        return ` This car has ${this.door} doors, mirrors ${this.mirror} and have a engine ${this.engine}`
    }
      carDetails() {
        return ` This car has ${this.door} doors, mirrors ${this.mirror} and have a engine ${this.engine}`
    }
}

const classInstance = new car(4, 10, 1)
console.log(classInstance.carStats());
console.log(classInstance.carDetails());
//class
class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
       getInfo = () =>{
        return (
            `the name is ${this.name} and age is ${this.age}`
            )
    }
    makeSound = () =>{
        return (
            "bark"
            )
    }
}
// class instance

const firstInstance= new Animal("puppy", 2)
console.log(firstName);
console.log(firstName.getInfo());




