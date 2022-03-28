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
function addData(newData) {
    setTimeout(() => {
        data.push(newData)
    }, 2000);
}
addData({ name: "Abuzar", title: "Tester" })
getData()

// if above funtion getData time is less than addData then only output is getData...
// so by using asycn await we can resolve it