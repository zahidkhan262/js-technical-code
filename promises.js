// // file upload by promises

// const fileUpload = new Promise((resolve, reject) => {


//     const isUpload = false;

//     if (isUpload) {
//         resolve('file upload successfully....')
//     } else {
//         reject('failed to  upload')
//     }


// })

// const uploadFile = async function () {
//     fileUpload.then(res => {
//         console.log(res);
//     })
//         .catch((error) => {
//             console.log(error)
//         })


//     try {
//         const res = await fileUpload;
//         console.log(res)

//     } catch (error) {
//         console.log(error)
//     }
// }
// uploadFile();

let api = new Promise((resolve, reject) => {

    let isFileUpload = true;

    if (isFileUpload) {
        resolve("the file is successfully uploaded")
    } else {
        reject("the file is failed to upload")
    }
});

const promiseFile = async () => {
    api.then((res) => {
        console.log(res)
    }).catch((error) => {
        console.log(error)
    })

    try {
        let response = await api;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
promiseFile();