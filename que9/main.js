const http = require('http');
const mysql = require('mysql');
const url = require('url');
const fs = require('fs');
const port = 3000;

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedb'
});
con.connect((err) => {
    if(err)
    {
        throw err;
    }
    console.log("Connected...");
});

const server = http.createServer((req, res) => {
    var ul = url.parse(req.url, true);
    if(req.url == '/')
    {
        var path = './public/index.html';
        fs.readFile(path, (err, data) => {
            if(err)
            {
                throw err;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    if(ul.pathname == '/insertdata' && req.method == 'GET')
    {
        var operation = ul.query.op;
        if(operation == 'Insert')
        {
            var sql = "insert into employeetb values(" + ul.query.id + ", '" + ul.query.name + "', " + ul.query.salary + ")";
            con.query(sql, (err, result) => {
                if(err)
                {
                    throw err;
                }
                console.log("Record Inserted...");
            });
            res.end("Record Inserted...");
        }
        else if(operation == 'Display')
        {
            var sql = "select * from employeetb";
            con.query(sql, (err, result) => {
                if(err)
                {
                    throw err;
                }
                var myarr = JSON.stringify(result);
                res.write(myarr);
                res.end();
            });
        }
    }
});
server.listen(port);
console.log("The server is listening on port " + port);