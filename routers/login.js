const express = require('express');
const router = express.Router();



const connection = require('./connection');
// login validations

const bodyParser = require('body-parser');


  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());              // It enables your application to handle JSON-encoded request bodies.
  

router.post('/', (req, res) => {
    const { username, password } = req.body;
  
    // Check user credentials in the database
    connection.query('SELECT * FROM signin WHERE username = ?', [username], (err, results) => {
      if (err) {
        console.error('Error checking user:', err);
        res.status(500).json({ success: false, message: 'Login failed.' });
        return;
      }
  
      if (results.length == 1) {   // a user with the provided username was found in the database.
        const user = results[0];
        if (password == user.password) {
          res.status(200).json({ success: true, message: 'Login successful.' });
        } else {
          res.status(401).json({ success: false, message: 'Incorrect password.' });
        }
      } else {
        res.status(404).json({ success: false, message: 'User not found.' });
      }
    });
  });
  module.exports=router;