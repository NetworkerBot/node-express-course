//This file contains all the controlling logic of manipulating the data.
const database = require('../db/connect') 

const getAllTasks = (req,res)=>{ //"/" refers to /api/v1/tasks. This is a get request.
    console.log('I m getting')
    database.find({},(err,data)=>{
        if (err){
            res.send({success:false,msg:'DataBase not Found...'});
            return;
        }
        res.json(data);
    })
}

const createTask = (req,res)=>{
    const timeStamp = Date.now()
    var task = req.body;
    if(!task.completed){
        task.completed = false;
    }
    if(task.name == ''){
        return res.status(201).json({success:false,msg:'Provide a Task.'})
    }
    if(task.name.length > 20){
        return res.status(201).json({success:false,msg:'Task description long.'})
    }
    task.timeStamp = timeStamp
    database.insert(task) 
    res.status(201).json({success:true,msg:task})
}

const getTask = (req,res)=>{ 
    database.find({ _id:req.params.id}, (err, docs)=>{
        if(err){
            throw err;
        }
        res.status(200).json(docs)    
      });
}

const updateTask = (req,res)=>{ 
    const upId = req.params.id;  
    database.find({ _id:upId}, (err, docs)=>{
        if(err){
            throw err;
        }
        return res.status(200).json(docs)    
      });  
}

const deleteTask = (req,res)=>{ 
    
    database.remove({ _id:req.params.id},(err, numRemoved)=> {
        if(err){
            throw err;
        }
        res.status(200).json({success:true,msg:numRemoved})
      });
}


module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask};