class Animals {
    constructor(ename) {
        this.ename = ename;
    }
    sound() {
        console.log("all animals sound")
    }
}

class Dog extends Animals {
    constructor(ename) {
        super(ename)
    }
    sound() {
        console.log("bhooooo bhooooo")
    }
}