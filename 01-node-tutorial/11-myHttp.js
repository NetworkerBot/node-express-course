const http = require('http')

const server = http.createServer((req,res)=>{
console.log(req)
    if(req.url == '/'){
        res.end('this is start')
    }
    if(req.url == '/about'){
        res.end('This is a brief history.')
    }

    res.end(`<h2>We dont have a page</h2>`)
})

server.listen(5000)