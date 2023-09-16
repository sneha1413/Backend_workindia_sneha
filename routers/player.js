const express = require('express');
const router = express.Router();



const connection = require('./connection');



router.get("/",(req,res)=>{
    connection.query('SELECT * FROM `player`', function(err, result, fields) {
      if (err) {
          return console.log(err);
      }
      res.send(result);
  })

  })


  module.exports=router;