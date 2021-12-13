class car {
    constructor(door, mirror, engine) {
        this.door = door;
        this.mirror = mirror;
        this.engine = engine;
    }


    carStats() {
        return ` This car has ${this.door} doors, mirrors ${this.mirror} and have a engine ${this.engine}`
    }
}

const classInstance = new car(4, 10, 1)

console.log(classInstance.carStats());