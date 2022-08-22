const express = require('express')
const route = express.Router()
import userControl from './controllers'



  route.route('/').post(userControl.post).put(userControl.put).delete(userControl.Delete).get(userControl.get)
