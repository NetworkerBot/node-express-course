const http = require('http')
const { resolve } = require('path')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end('This is great')
    }
    if(req.url =='/home'){
        res.end('I am home')
    }
    if(req.url == '/looppyy'){
        for(let i = 0; i< 10000; i++){
            console.log(i)
            for(let c = 0; c < 100000; c++){
                console.log(i,c)
            }
            res.end(`Isn't this wonderful ${i}`)
        }
    }
})

server.listen(5000, ()=>{
    console.log('I am listenin...')
})