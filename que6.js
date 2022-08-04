var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./file/ziptmp.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('./file/newfile.txt','utf-8'));
  
console.log("File Decompressed.");