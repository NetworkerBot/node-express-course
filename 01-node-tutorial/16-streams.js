const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt','utf-8')

stream.on('data', (result) => { //the data is the type of the event
  console.log(result.length)
  //console.log(result)
  console.log('this is part of file')
})
stream.on('error', (err) => console.log(err)) //the error is a type too
