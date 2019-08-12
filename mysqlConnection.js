//app.js

'use strict'

const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'bdeafc9b13425a',
    password : '0e68b9d9',
    database : 'heroku_c35c7416b2b3c99'
});

//ここからMySQLアクセス
module.exports = connection;