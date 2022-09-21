const express = require('express')
const path = require('path')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use('/', express.static(path.join(__dirname, '/index.html')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

 app.get('/js', (req, res) => {
   res.sendFile(path.join(__dirname, '/index.js'))
 })
app.listen(port, ()=> {
    console.log('Docked at port ' + port)
})