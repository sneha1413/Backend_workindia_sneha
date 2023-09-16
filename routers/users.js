const express = require('express');
const router = express.Router();


const connection = require('./connection');
  
  // API Get Match Schedules
 router.use("/",(req,res)=>{    //Express application's request-response cycle
    connection.query('SELECT * FROM `match`', function(err, result, fields) {
      if (err) {
          return console.log(err);
      }
      res.send(result);
  })
 

  })
  

  module.exports=router;