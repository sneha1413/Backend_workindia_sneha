const express = require('express')

const url = 'http://localhost:9000/squad/'
const app = express()
const bcrypt = require('bcrypt');

const { createConnection } = require('mysql') //mysql module is imported to use  it's properties in createcon.


const connection= createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "workindia",
    connectionLimit: 10
})



app.listen(9000,()=> { //callback function
  console.log('SERVER  :http://localhost:9000');
  connection.connect((err)=>{  //callback function
    if(err) 
    {console.log(err);
    }
  
    console.log("Database connected");
  })
    });




 
const squadRoute = require('./routers/squad');
const playerRoute = require('./routers/player');
const UserRoute = require('./routers/users');
const registerRoute = require('./routers/register');
const loginRoute = require('./routers/login');

app.use("/login",loginRoute);
app.use("/register",registerRoute);
app.use("/users",UserRoute);
app.use("/squad",squadRoute);
app.use("/player",playerRoute);




  





// const jwt = require('jsonwebtoken');


// // Secret key used to sign and verify JWTs
// const secretKey = '14132003';

// // Middleware to verify the Authorization Token
// function verifyToken(req, res, next) {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token.replace('Bearer ', ''), secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: 'Forbidden' });
//     }

//     // Assuming your JWT contains user information and permissions
//     req.user = decoded;
//     next();
//   });
// }

// Admin API endpoint
// app.get('/register', verifyToken, (req, res) => {
//   // Check if the user has the necessary permissions
//   if (req.user && req.user.isAdmin) {
//     // Handle the admin request
//     res.json({ message: 'Admin resource accessed' });
//   } else {
//     res.status(403).json({ message: 'Forbidden' });
//   }
// });

// app.get('/squad', verifyToken, (req, res) => {
//   // Check if the user has the necessary permissions
//   if (req.user && req.user.isAdmin) {
//     // Handle the admin request
//     res.json({ message: 'Admin resource accessed' });
//   } else {
//     res.status(403).json({ message: 'Forbidden' });
//   }
// });

 
// app.get('/users', verifyToken, (req, res) => {
//   // Check if the user has the necessary permissions
//   if (req.user && req.user.isAdmin) {
//     // Handle the admin request
//     res.json({ message: 'Admin resource accessed' });
//   } else {
//     res.status(403).json({ message: 'Forbidden' });
//   }
// });

// app.get('/register', verifyToken, (req, res) => {
//   // Check if the user has the necessary permissions
//   if (req.user && req.user.isAdmin) {
//     // Handle the admin request
//     res.json({ message: 'Admin resource accessed' });
//   } else {
//     res.status(403).json({ message: 'Forbidden' });
//   }
// });



