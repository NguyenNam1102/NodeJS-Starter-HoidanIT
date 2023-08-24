require('dotenv').config()
import express from 'express'
import configViewEngine from './config/viewEngine'

const webRoutes = require('./routers/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config template engine
configViewEngine(app)

// khai báo route
app.use('/', webRoutes)

// simple query
// connection.query(
//     'SELECT * FROM Users u ',
//     function (err, results, fields) {
//         console.log('>>> result: ', results);
//         console.log('>>> fields: ', fields);
//     }
// );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})