let mainAmountBalance = 100000;


function bank() {

    var username = prompt("write (javascript)");

    if (username == "javascript") {

        count = 1;
        function pin() {

            var atmPin = parseInt(prompt("enter your 4 digit atm pin.. use 1111 or 0000 "));
            if (count < 3) {
                if (atmPin === 0000 || atmPin === 1111) {

                    var debit = parseInt(prompt("enter your amount less than 100000"));
                    if (mainAmountBalance >= debit) {
                        var availableBalance = mainAmountBalance - debit;
                        console.log(`Your main balance is: ${mainAmountBalance}`); //for console
                        console.log(`Your available balance is: ${availableBalance}`); //for console
                        console.log(`Your Debit balance is: ${debit}`);  //for console
                        document.write(`Your main balance is: ${mainAmountBalance} <br>`);
                        document.write(`Your available balance is: ${availableBalance} <br>`);
                        document.write(`Your debit balance is: ${debit} <br>`);
                    } else {
                        console.log("Insuficient balance try below of your main balance..") //for console
                        document.write("Insuficient balance try below of your main balance..")
                    }
                } else {
                    count++
                    pin();
                }
            } else {
                document.write(`You exceed more atempth your account is blocked for 24hrs..`)
                console.log(`You exceed more atempth your account is blocked for 24hrs..`) //for console
            }
        }
        pin()
    } else {
        document.write("wrong username please try again..")
        console.log("wrong username please try again..")  //for console
    }
}
bank()