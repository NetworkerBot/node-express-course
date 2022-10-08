const express = require('express');
const {readFileSync} = require('fs');
const path = require('path')

const app = express()
app.use(express.static('./navbar-app')) //this is taking care of sending all the necessary files for us....


// app.get('/',(req,res)=>{
// res.sendFile(path.join(__dirname,'./navbar-app/index.html'))
// })

app.get('*',(req,res)=>{
    res.status(404).send('Res Not Found')
})



app.listen(5798, ()=>{
    console.log('Another Funny port... ')
})