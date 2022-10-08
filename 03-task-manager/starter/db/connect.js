// const mongoose = require('mongoose')

// const connectionString = 'mongodb+srv://trial:4CU2vA@cluster0.j5un5.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'


// mongoose.connect(connectionString,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useUnifiedTopology:true
//     })
//     .then(()=>console.log('DB Connected'))
//     .catch((err)=>console.log(err))

const Datastore = require('nedb');

const database = new Datastore('taskManager.db')

database.loadDatabase();
    
module.exports = database