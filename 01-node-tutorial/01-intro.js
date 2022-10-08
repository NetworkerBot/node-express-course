const amount = 9

if (amount < 10) {
  console.log('small number')
} else {
  console.log('large number')
}

console.log(`hey it's my first node app!!!`)

setTimeout(()=>{
  console.log(10)
},1000)

// setInterval(()=>{
//   console.log('This will continue' + "10")
// },1000)

console.log(module)

const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The systes is up for ${os.uptime}`)