// var userInput = parseInt(prompt("enter a number"));

var userInput = 5;

let star = "";
for (let i = 1; i <= userInput; i++) {
    for (let j = 0; j < i; j++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);