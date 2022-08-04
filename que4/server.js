const WebSocket = require('ws');
const bot = require('selenabot');
const http = require('http');
const fs = require('fs');


var httpserver = http.createServer(function(request, response) 
{
   if(request.url=="/")
   {
     fs.readFile("./public/index.html",(err,data)=>{
         response.write(data)
         response.end();
     })
   }
}).listen(8080, function() {
    console.log((new Date()) + 
      ' Server is listening on port 8080');
});


let data='';
let wss= new WebSocket.Server({server:httpserver}) 
wss.on("connection",async(cws)=>{
cws.send(await bot.reply("hii"));
cws.on("message",async (msg)=>{
     console.log("\n"+msg);
   
     let data=msg.toString();
     console.log(data);
     cws.send(await bot.reply(data));
})

})