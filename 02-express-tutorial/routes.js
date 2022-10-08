const express = require('express')

const router = express.Router()

const {people} = require('./data')

//change the app ==> router, and convert the /api/people ==> /
router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

router.post('/',(req,res)=>{
    const {name} = req.body;
    if(!name){
        res.status(201).json({success:false,msg:'failed'})
    }
    res.status(200).json({success:true,data:[...people,name]})
})

router.put('/:id',(req,res)=>{
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

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    
    const person = people.find((pers) => pers.id == Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:`no person with ${id}`})
    } 
    const Newperson = people.filter((pers) => pers.id !== Number(id))
    res.status(200).json({success:true,data:Newperson})
})

module.exports = router;