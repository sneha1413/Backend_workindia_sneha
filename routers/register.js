const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');



const connection = require('./connection');

  //  registration


  const bodyParser = require('body-parser');


  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());              // It enables your application to handle JSON-encoded request bodies.
  
  // Registration API endpoint
  
  router.post('/', (req, res) => {
    const { username, password } = req.body; //This line extracts the "username" and "password" properties 
    //from the request body, which is expected to be in JSON format
  
    const saltRounds = 10; // Number of salt rounds (recommended: 10 or higher)

    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        
        
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            // Handle error
            console.error(err);
          } else {
            // Store the 'hash' value in your database
            console.log('Hashed Password:', hash);
            var sql = "INSERT INTO signin (username,password) VALUES (?,?)";
            //   var values = [[username,hash]]
           
            connection.query(sql, [username, hash], (err, result) => {
              if (err) {
                console.error('Error registering user:', err);
                res.status(500).json({ success: false, message: 'User registration failed.' });
                return;
              }
              res.status(200).json({ success: true, message: 'User registered successfully.' });
            });
          }
        });
      }
    });
    






    // Insert user data into the database
    // bcrypt.hash(password,10, function(err, hash) {
    
  });
  
  module.exports=router;