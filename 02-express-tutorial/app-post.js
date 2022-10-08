const express = require('express')
const app = express()
const {people} = require('./data')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static('./methods-public'))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:'true',data:people})
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    let name = req.body.name
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'Give name'})
    }
    res.status(201).json({success:true,person:name})
})

app.listen(5000, ()=>{
    console.log('listening in at 5000...')
})