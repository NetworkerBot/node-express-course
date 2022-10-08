// started operating system process
console.log('first')
console.time()
setTimeout(() => {
  console.log('second')
}, 1000)
console.timeEnd()
console.log('third')
// completed and exited operating system process
