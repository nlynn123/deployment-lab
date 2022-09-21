const express = require('express')
const path = require('path')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.listen(port, ()=> {
    console.log('Docked at port ' + port)
})