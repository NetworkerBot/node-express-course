console.log('Welcome to Node Tutorial')

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
console.log(first)

writeFileSync('./content/result-s.txt',`${first} and this is added by app.js`)

const reader = readFileSync('./content/result-s.txt','utf8')
console.log(reader)

const {readFile, writeFile} = require('fs')

readFile('./content/result-s.txt','utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    const myFirst = `Now I am adding this information too. ${result}`;
    writeFile('./content/result-s.txt',myFirst,{flag:'a'}, (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
})