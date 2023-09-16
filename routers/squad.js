const express = require('express');
const router = express.Router();



const connection = require('./connection');

// Now you can access the exported functions, variables, or objects


const data ={name:"Hardik",role:"batter"}
 router.use("/", (req, resp) => {  //Express route that handles HTTP POST requests to the "/squad" endpoint.
    
  connection.query("INSERT INTO squad SET?",data, (err, result,fields) => { //? is used to provide data binding
    if (err) { 
      resp.status(500).json({ success: false, message: 'failed.' }); //500 Internal Server Error response
    console.log(err)
    }
    else { 
      resp.status(200).json({ success: true, message: 'player added to the team succesfully.',result }); //request succeeded
     }
  })
});

module.exports=router;