const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./file/tmpfile.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('./file/ziptmp.gz'));
console.log("file compressed");