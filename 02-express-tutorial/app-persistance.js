const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static("./methods-public"))

const {people} = require('./data')

//change the app ==> app, and convert the /api/people ==> /
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        res.status(201).json({success:false,msg:'failed'})
    }
    res.status(200).json({success:true,data:[...people,name]})
})

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    
    const person = people.find((pers) => pers.id == Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:`no person ${person}`})
    }
    const newpe = people.map((pers)=>{
        if(pers.id == Number(id)){
            pers.name = name; //here we are replacing the name, but not writing to the file still...
        }
        return pers
    })
    res.status(200).json({success:true,data:newpe}) 
})

app.delete('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    
    const person = people.find((pers) => pers.id == Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:`no person with ${id}`})
    } 
    const Newperson = people.filter((pers) => pers.id !== Number(id))
    res.status(200).json({success:true,data:Newperson})
})


app.listen(5000, ()=>{
    console.log('listening in at 5000...')
})