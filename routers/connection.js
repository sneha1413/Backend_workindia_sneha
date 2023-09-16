
const { createConnection } = require('mysql') //mysql module is imported to use  it's properties in createcon.


    const connection= createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "workindia",
        connectionLimit: 10
    })
    
  


  module.exports =  connection;
