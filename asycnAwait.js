let data = [
    { name: "zahid", title: "developer" },
    { name: "Abuzar", title: "developer" },
    { name: "yosuf", title: "developer" },
];
function getData() {
    setTimeout(() => {
        let showData = "";
        data.map((ele, index) => {
            showData += `${ele.title} </br>`
        })
        console.log(showData);
        document.getElementById("bind").innerHTML = showData;
    }, 1000);
}


// function addData(newData) {
//     setTimeout(() => {
//         data.push(newData)
//     }, 2000);
// }
// addData({ name: "Abuzar", title: "Tester" })
// getData()

// //  output=> developer
// developer
// developer

// if above funtion getData time is less than addData then only output is getData...


// so by using call back funtion we can resolve it

// function addData(newData, callback) {
//     setTimeout(() => {
//         data.push(newData);
//         callback()
//     }, 2000);
// }
// addData({ name: "Abuzar", title: "Tester" }, getData)
// //  output=> developer
// developer
// developer
// Tester

// by using Promise we can resolve it

function addData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.push(newData);

            let errorMessage = false;
            if (!errorMessage) {
                resolve()
            } else {
                reject("error ddata not found")
            }

        }, 2000);
    })
}
// addData({ name: "Abuzar", title: "Tester" })
//     .then(getData)
//     .catch((error) => {
//         console.log(error)
//     })

// developer
// developer
// developer
// Tester

// by using async await function 
async function start() {
    await addData({ name: "Abuzar", title: "Tester" })
    return getData()
}
start()

