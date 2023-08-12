require('dotenv').config()
import express from 'express'
import configViewEngine from './config/viewEngine'

const webRoutes = require('./routers/web')
const mysql = require('mysql2');

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app)

// khai báo route
app.use('/', webRoutes)

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default: 3306
    user: 'root', //default: empty
    password: '123456',
    database: 'hoidanit'
});

// simple query
connection.query(
    'SELECT * FROM Users u ',
    function (err, results, fields) {
        console.log('>>> result: ', results);
        console.log('>>> fields: ', fields);
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})