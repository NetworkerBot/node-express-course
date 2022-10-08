const http = require('http')
const {readFileSync} = require('fs')

const homepage = readFileSync('./navbar-app/index.html')
const styles = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const logic = readFileSync('./navbar-app/browser-app.js')
console.log('Express Tutorial modified')

const newSer = http.createServer((req,res)=>{
    console.log('starting the new server')
    // console.log(req.method)
    // console.log(req.url)
    if(req.url =='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()
    }else if(req.url =='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(styles)
        res.end()
    }else if(req.url =='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(logo)
        res.end()
    }
    else if(req.url =='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(logic)
        res.end()
    }

})

newSer.listen(5000,()=>{
    console.log('Listening...')
})