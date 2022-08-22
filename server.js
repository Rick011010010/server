const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




const userRouter = require('./routes/Users')

app.use('/users', userRouter)



const userControllers = require('./controllers/userControl')

app.use('/controllers', userControllers )