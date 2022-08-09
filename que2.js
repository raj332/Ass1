const express = require('express');

const app =express();

app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.redirect('index.html')
})
app.get('/gethello',(req,res)=>{
 res.json({body:"Hello NodeJS!!"});
 res.end();
})

app.listen(8000,()=>{
    console.log("Listening to 8000")
})