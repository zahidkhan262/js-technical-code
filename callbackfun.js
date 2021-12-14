// what is call back function

//1 to take a funtion and pass it to another funtion is called call back funtion

// 2 it gives accessto the whole asynchronous world in synchronous

// setTimeout(() => { console.log("timer") }, 3000)
// function call(y) {
//     console.log('x');
//     y();
// }
// call(function y() {
//     console.log('z');
// })

function outer() {

    let count = 0;
    document.getElementById('btn')
        .addEventListener('click', xyz = () => {
            console.log("btn clicked", ++count);
        })
} outer();

console.log(count) //count is not define in both var and let const also.. because it is function scoped...