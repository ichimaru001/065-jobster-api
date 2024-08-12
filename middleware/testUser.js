const {BadRequestError} = require('../errors')

const testUser = (req,res,next)=>{
  if(req.user.testUser){
    throw new BadRequestError('Read Only for test user!')
  }
  next()
}

module.exports = testUser
