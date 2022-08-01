
const fetch = require('node-fetch');
const getdata =async ()=>{
   let response= await fetch('https://www.google.com/')
   let data =response.text();
   console.log(await data);
 

}
getdata();
