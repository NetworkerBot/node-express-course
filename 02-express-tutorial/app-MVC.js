const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static("./methods-public"))

const {getPeople,createPerson,createPutPerson,deletePerson} = require('./controllers/requestsCB')
//change the app ==> app, and convert the /api/people ==> /
app.get('/api/people', getPeople) 

app.post('/api/people',createPerson)

app.put('/api/people/:id',createPutPerson)

app.delete('/api/people/:id',deletePerson)


app.listen(5000, ()=>{
    console.log('listening in at 5000...')
})