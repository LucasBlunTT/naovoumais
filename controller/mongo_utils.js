const mongo = require('mongodb')

const url = 'mongodb://localhost:27017/';
mongo.connect(url, (err)=>{
   if(!err) {
      console.log("successful connection with the server");
   }
   else
      console.log("Error in the connectivity");
})

