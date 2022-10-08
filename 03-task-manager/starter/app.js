const cors = require('cors')
const express = require('express')
const req = require('express/lib/request')
const app = express()

const tasks = require('./routes/tasks') //This is the middleware router...

app.use(express.static('./public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
const port = 5000;

app.listen(port,()=>{
    console.log(`The port Server is listening is ${port}`)
})

app.get('/hello',(req,res)=>{
    res.send('Hi There...Task Manager App')
})

app.use('/api/v1/tasks',tasks) //the server is using the middleware 

//Think about the type of requests required 

//app.get('/api/v1/tasks) - get the tasks
//app.post('/api/v1/tasks) - create a task
//app.get('/api/v1/tasks/:id) - get task by id
//app.patch('/api/v1/tasks/:id) - update the tasks
//app.delet('/api/v1/tasks/:id) - delete a selected tasks