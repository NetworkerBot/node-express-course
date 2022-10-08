const EventEmitter = require("events")

const customE = new EventEmitter()

customE.on('shoot',()=>{
    console.log('Tishkaaun')
})

customE.on('shot',(name,bullet)=>{
    console.log(`The ${name} is hit with ${bullet} bullets`)
})

customE.emit('shoot')
customE.emit('shot','killer',55)