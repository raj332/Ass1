var fs = require('fs');


function unlink(fpath) 
{
  return new Promise(function(success,fail){
    fs.unlink(fpath,function(err,data){
      if(err)
        fail(err)
      else
        success(data)
    })
  })
}
unlink("./file/tmpfile.txt").then((data)=>{
  console.log("Successfuly deteled")
}).catch((err)=>{
  console.log("err",err)
})




