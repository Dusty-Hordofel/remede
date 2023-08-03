const userService = require('../services/userService')
const User = require('../database/models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

module.exports.createUser = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.createUser(req.body)
    response.status = 200
    response.message = 'User successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in userController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

exports.loginUser = async (req, res) => {
  const {email,password} = req.body
 
  try{
    const user = await User.findOne({ email:email })
    // console.log("🚀 ~ file: userController.js:31 ~ exports.loginUser= ~ user:", user.password)
    
    if (!user) {
      throw new Error('User not found!')
    }

     const isValid = await bcrypt.compare(password, user.password)
    //  console.log("🚀 ~ file: userController.js:38 ~ exports.loginUser= ~ isValid:", isValid)

    if (!isValid) {
      throw new Error('Password is invalid')
    }

    // creation of token
    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    ) 

    console.log("🚀 ~ file: userController.js:48 ~ exports.loginUser= ~ token:", token)

    // res.cookie('token', token, { httpOnly: true, sameSite: 'strict' }).status(201).json({ message: 'Logged in successfully' });
    // res.cookie('token', token, { httpOnly: true, sameSite: 'strict' }).send('Logged in successfully');
    // return {token}
   
    res.status(201).json({token})

  }  catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}


exports.getUserProfile = async (req, res) => {
    try {
    const jwtToken = req.headers.authorization.split('Bearer')[1].trim()
     const decodedJwtToken = jwt.decode(jwtToken)
      const user = await User.findOne({ _id: decodedJwtToken.id })
      const {firstName,lastName,...rest} = user
      
      if (!user) {
        throw new Error('User not found!')
      }
      
      res.status(201).json({firstName,lastName});
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
  
}





exports.updateUserProfile = async (req,res) => {

  const {firstName,lastName} = req.body;
  
  try {
    const jwtToken = req.headers.authorization.split('Bearer')[1].trim()
    const decodedJwtToken = jwt.decode(jwtToken)
    const user = await User.findOneAndUpdate(
      { _id: decodedJwtToken.id },
      {
        firstName,
        lastName
      },
      { new: true }
    )

    if (!user) {
      throw new Error('User not found!')
    }

    return  res.status(201).json({user})
  } catch (error) {
    console.error('Error in userService.js', error)
    return  res.status(400).json({message:error})
    // throw new Error(error)
  }
}

