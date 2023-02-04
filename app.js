const express= require('express');
const app= express();

const PORT=4000;
const customeMiddleWare =(res, req,next)=>{
    console.log("middleware")
    next()
}

app.use(customeMiddleWare)

app.get('/',(res, req)=>{
    console.log("zahid khan")
    res.send("hello world")
});
// create middle for about so inclide as second parameter in app.get
app.get('/about',customeMiddleWare,(res, req)=>{
    console.log("zahid khan")
    res.send("My name is   khan I am frontend React js developer")
})
    
app.listen(PORT,()=>{
    console.log(`server is live on this port ${PORT}`)
})
    

      // this is pure fucntion 
  // A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed
  function CalculateGST(productPrice) {
    return productPrice * 5;
  }
  console.log(CalculateGST(20))
  // not pure function eg
  var tax = 20;
  function calculateGST(productPrice) {
    return productPrice * (tax / 100) + productPrice;
  }
  console.log(calculateGST(2))
  // It is not a pure function as the output is dependent on an external variable “tax”. 
