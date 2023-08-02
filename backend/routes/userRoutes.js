const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')
const authMiddleware = require('../middleware/tokenValidation')

router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)
// router.post('/login', userController.loginUser)
// router.post("/users",  userController.loginUser);

router.post(
  '/profile',
  // authMiddleware,
  tokenValidation.validateToken,
  userController.getUserProfile
)

router.put(
  '/profile',
  // tokenValidation.validateToken,
  userController.updateUserProfile
)

module.exports = router
