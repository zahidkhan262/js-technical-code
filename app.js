const express= require('express');
const app= express();

const PORT=4000;
const customeMiddleWare =(res, req,next)=>{
    console.log("middleware")
    next()
}

app.use(customeMiddleWare)

app.get('/',(res, req)=>{
    console.log("zahid khan");
    res.send('hello world");
});
// create middle for about so inclide as second parameter in app.get
app.get('/about',customeMiddleWare,(res, req)=>{
    console.log("zahid khan");
    res.send('My name is Zahid khan I am frontend React js developer");
})
    
app.listen(PORT,()=>{
    console.log(`server is live on this port ${PORT}`)
})
    
