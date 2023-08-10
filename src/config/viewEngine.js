import express from 'express'
const path = require('path')


const configViewEngine = (app) => {
    app.set("view engine", "ejs")
    app.set("views", "./src/views")

    // config static files: image/css/js
    app.use(express.static(path.join('./src', 'public')))
}

export default configViewEngine;