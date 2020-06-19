const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
//Conexion a la base de datos
require('./db.js')

const app = express()

app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
//Router
require('./routes')(app)

app.get('/',(req, res) =>{
    res.send('Connect')
})

app.listen(3000)