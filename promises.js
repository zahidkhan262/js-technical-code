// file upload by promises

const fileUpload = new Promise((resolve, reject) => {


    const isUpload = false;

    if (isUpload) {
        resolve('file upload successfully....')
    } else {
        reject('failed to file upload')
    }


})

const uploadFile = async () => {
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