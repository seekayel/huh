// index.js 
const express = require('express')
const app = express()
app.get('/', (req, res) => {
     var a = Math.random();
     console.log('recieved [GET] / ')
     
         console.log(req.headers['user-agent'])

    res.send(a.toString())
})
app.listen(process.env.PORT)
