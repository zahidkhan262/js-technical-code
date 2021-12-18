const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "up", models: ["gkp", "noida", "bhadohi"] },
        { name: "delhi", models: ["gzb", "bagh", "dwarka"] },
        { name: "pun", models: ["har", "chan", "gjj"] }
    ]
}



// for (h in myObj.cars) {
//     document.write(myObj.cars[h].name, "<br>")
//     myObj.cars[h].models.forEach((g) => {
//         document.write(g, "<br>")
//     })
// }

for (h in myObj.cars) {
    document.write(myObj.cars[h].name, "<br>")

    let x = myObj.cars[h];

    x.models.forEach((g) => {
        document.write(g, "<br>")
    })
}

