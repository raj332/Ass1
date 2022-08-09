const fetch = require('cross-fetch');
const express = require('express');
const app= express();
const WebSocket = require('ws')
const http= require('http')
const server = http.createServer(app);
app.post('/livescore')




server.listen(3000,()=>{
    console.log("Server on 3000")
})

let wss= new WebSocket.Server({server:server}) 
wss.on("connection",async(cws)=>{

async function fetchscore()
{
   let response= await fetch('https://api.cricapi.com/v1/currentMatches?apikey=fccb1b62-7879-4daa-8bd4-7b05305a16f5&offset=0')
    let data =  response.json();
    
   
    data=JSON.stringify(await data)
    console.log(data)
    cws.send(data);   
}
fetchscore();  
setInterval(() => {
    fetchscore();  
}, 1000);

})


