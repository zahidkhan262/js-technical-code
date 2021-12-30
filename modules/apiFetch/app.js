let showData = document.getElementById('bind');

import moduleData from './moul.js';

import {getDate} from './moul.js'

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
        result.map((item) => {
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
            let filterData = result.filter((ele) => {
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

    })
})


moduleData.map((abc) => {
    console.log("modules:", abc)
})





console.log("today date is :" , getDate)