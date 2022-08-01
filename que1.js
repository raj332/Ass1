const http = require('http');
 const fs = require('fs');
 const url = require('url');

 const server =http.createServer((req,res)=>{
       let url1= url.parse(req.url ,true);
    if(req.url =="/index.html" && req.method =="GET")
       {
        let filename="./file/index.html";
        fs.readFile(filename,function(err,data){
            if(err){
                res.writeHead(404,{'content-Type':'text/html'});
                return res.end("404 Page Not Found");
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
       }else 
       {
           res.write("/ is not allowed to access!!!");
           return res.end();
       }
   });
   server.listen(9090);
   
   console.log("Server listeniing on port number 9090");
