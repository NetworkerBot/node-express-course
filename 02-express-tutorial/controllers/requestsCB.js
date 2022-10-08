const {people} = require('../data')

const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people})
}

const createPerson = (req,res)=>{
    const {name} = req.body;
    if(!name){
        res.status(201).json({success:false,msg:'failed'})
    }
    res.status(200).json({success:true,data:[...people,name]})
}

const createPutPerson = (req,res)=>{
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
}

const deletePerson = (req,res)=>{
    const {id} = req.params;
    
    const person = people.find((pers) => pers.id == Number(id))
    if(!person){
        return res.status(404).json({success:false,msg:`no person with ${id}`})
    } 
    const Newperson = people.filter((pers) => pers.id !== Number(id))
    res.status(200).json({success:true,data:Newperson})
}

module.exports = {getPeople,createPerson,createPutPerson,deletePerson}