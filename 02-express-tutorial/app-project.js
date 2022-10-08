const express = require('express')
const {readFileSync} = require('fs')

const {products,people} = require('./data') //the json inside the js file is directly imported

const app = express()

app.get('/',(req,res)=>{
    res.send(`<h2>A Modest Home Page</h2>`)
})

app.get('/products',(req,res)=>{
    const newProd = products.map((pro)=>{
        const {name, id, image} = pro;
        return {id, name, image}
    })
    
    res.json(newProd)
})

app.get('/products/1',(req,res)=>{
    const oneProd = products.find((pro)=> pro.id == 1)    
    res.json(oneProd)
})


app.get('/products/query',(req,res)=>{
    // console.log(req.query)
    const {search, limit} = req.query;
    let sortProduct = [...products] 
    if(search){
        sortProduct = sortProduct.filter((uho) =>{
            return uho.name.startsWith(search)
        })
        if(sortProduct.length < 1){
            return res.status(200).json({success:true,data:[]})
        } //always return, else a "big fat error is expected...."
    }
    if(limit){
        sortProduct = sortProduct.slice(0,Number(limit))
        if(sortProduct.length < 1){
           return res.status(200).json({success:true,data:[]})
        }
    }   
    
    res.status(200).json(sortProduct)
})

app.get('/products/:prdId',(req,res)=>{
    const idLoc = req.params.prdId
    const idProd = products.find((pro)=> pro.id == Number(idLoc))
    if(idProd == undefined){
        res.status(404).send('Product not Found')
    }    
    res.json(idProd)
})

app.get('/people',(req,res)=>{
    res.json(people)
})

app.listen(5000, ()=>{
    console.log('Listening')
})