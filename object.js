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
