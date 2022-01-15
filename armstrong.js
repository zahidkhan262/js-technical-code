document.getElementById("check").onclick = function () {

    let showData = document.getElementById('showData1')
    let userInput = document.getElementById("search1").value
    console.log(userInput)

    let temp = parseInt(userInput);
    let magicNumber = 0;
    while (temp > 0) {

        let remainder = temp % 10;
        magicNumber += parseInt(remainder * remainder * remainder);
        console.log("magicNumber", magicNumber)
        temp = parseInt(temp / 10);
        console.log('temp', temp)
    }
    if (magicNumber === temp) {
        showData.innerHTML = `${userInput} is Armstrong`
    } else {
        showData.innerHTML = `${userInput} is not Armstrong`

    }
}