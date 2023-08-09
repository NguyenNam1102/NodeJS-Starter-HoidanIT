import express from 'express'
import configViewEngine from './configs/viewEngine'
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

app.use(express.static('public'))

configViewEngine(app)
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})