const jwt = require('jsonwebtoken')
const { restart } = require('nodemon')

// middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY || 'default-secret-key');
//     req.userId = decoded.id; // Attach user ID to request for further use
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
// };

// module.exports = authMiddleware;

// module.exports.validateToken = (req, res, next) => {
//   const userToken = req.cookies.token;

//   if (!userToken) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decodedToken = jwt.verify(token, process.env.SECRET_KEY || 'default-secret-key');
//     // req.userId = decodedToken.id; // Attach user ID to request for further use
//     req.userId = decodedToken
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
//   // let response = {}

//   // try {
//   //   if (!req.headers.authorization) {
//   //     throw new Error('Token is missing from header')
//   //   }

//   //   const userToken = req.headers.authorization.split('Bearer')[1].trim()
//   //   const decodedToken = jwt.verify(
//   //     userToken,
//   //     process.env.SECRET_KEY || 'default-secret-key'
//   //   )
//   //   return next()
//   // } catch (error) {
//   //   console.error('Error in tokenValidation.js', error)
//   //   response.status = 401
//   //   response.message = error.message
//   // }

//   return res.status(200).send(token)
// }

module.exports.validateToken = (req, res, next) => {
  let response = {}

  try {
    if (!req.headers.authorization) {
      throw new Error('Token is missing from header')
    }

    const userToken = req.headers.authorization.split('Bearer')[1].trim()
    const decodedToken = jwt.verify(
      userToken,
      process.env.SECRET_KEY || 'default-secret-key'
    )
    return next()
  } catch (error) {
    console.error('Error in tokenValidation.js', error)
    response.status = 401
    response.message = error.message
  }

  return res.status(response.status).send(response)
}
