const autho = (req,res,next)=>{
    console.log('Logging you...')
    next()
}

module.exports = autho