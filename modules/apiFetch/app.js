let showData = document.getElementById('bind');

import moduleData from './moul.js';

import data, { getDate } from './moul.js'

fetch('data.json').then((res) => {
    res.json().then((result) => {
        console.log(result)


        let tble = `
    <table border="1" width="100%">
    <thead>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Title</td>
        </tr>
    </thead>
    `
        result.data.map((item) => {
            tble += `
                        <tbody>
                        <tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            <td>${item.title}</td>
                        </tr>
                    </tbody>
    `
        })
        tble += `</table>`

        showData.innerHTML = tble;


        let inpuValue = "";
        document.getElementById('a1').onkeyup = function () {
            inpuValue = this.value;
            console.log(inpuValue)
            let filterData = result.data.filter((ele) => {
                if (ele.name === inpuValue) {
                    return ele;
                }

            })
            console.log(filterData)
            filterData.map((item) => {
                tble += `
                            <tbody>
                                <tr>
                                    <td>${item.id}</td>
                                    <td>${item.name}</td>
                                    <td>${item.title}</td>
                                </tr>
                            </tbody>
                `
            })
            tble += `</table>`

            showData.innerHTML = tble;


        }

        let inpu1 = document.getElementById("id1");
        let inpu2 = document.getElementById("name1");
        let inpu3 = document.getElementById("title1");

        document.getElementById('done').onclick = function () {


            let obj = { name: inpu2.value, id: inpu1.value, title: inpu3.value }


            result.data.push(obj)

            result.data.map((item) => {
                tble += `
                    <tbody>
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.title}</td>
                    </tr>
                </tbody>
`
            })
            tble += `</table>`

            showData.innerHTML = tble;


            console.log(result)
        }


    })
})


moduleData.map((abc) => {
    console.log("modules:", abc)
})





console.log("today date is :", getDate)