const express = require('express')
const app = express()
// req => middleware => res
const {products} = require('./data')
// const {autho} = require('./autho')
const morgan = require('morgan')

const logger = (req,res,next) =>{
    const method = req.method;
    const app = req.url 
    const time = new Date().getFullYear();
    console.log(method, time,app)
    next()
}
//middleware can be very useful in adding new features

// const autho = (req,res,next)=>{
//     console.log('Logging you...')
//     next()
// }

app.use(morgan('dev'))

app.get('/products',(req,res)=>{
    const midProduct = products.map((p)=>{
        const {id,image,name} = p;
        return {id,image,name} 
    })
    res.json(midProduct)
})

app.get('/', (req,res)=>{ //The logger functionality is added
    res.send("home")
})
app.get('/about',(req,res)=>{
    res.send("about")
})


app.listen(7000, ()=>{
    console.log('listening on port 7000')
})