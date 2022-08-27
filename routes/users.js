const express = require('express')
const app = express()
const router = express.Router()
const userControl = require('../controllers/userControl')




  router.get('/todos', userControl.listAllTodos)



  


  router.post('/todos', userControl.createNewTodo)


  router.put('/todos/:text', userControl.updateTodo )



  router.delete('/todos/:text', userControl.deleteTodo)



 module.exports = router




