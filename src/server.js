require('dotenv').config()
import express from 'express'
import configViewEngine from './config/viewEngine'

const webRoutes = require('./routers/web')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config template engine
configViewEngine(app)

// khai báo route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})