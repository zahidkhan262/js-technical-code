// file upload by promises

const fileUpload = new Promise((resolve, reject) => {


    const isUpload = false;

    if (isUpload) {
        resolve('file upload successfully....')
    } else {
        reject('failed to  upload')
    }


})

const uploadFile = async function () {
    fileUpload.then(res => {
        console.log(res);
    })
        .catch((error) => {
            console.log(error)
        })


    try {
        const res = await fileUpload;
        console.log(res)

    } catch (error) {
        console.log(error)
    }
}
uploadFile();