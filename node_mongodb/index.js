const express = require("express");
import ExpressHandlebars from './node_modules/express-handlebars/lib/express-handlebars';
const path = require("path");
const handlebars = require("handlebars");
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')

var app = ExpressHandlebars();

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    
})

var app = express()
app.listen(3000, () => {
    console.log('server started at port 3000')
})
