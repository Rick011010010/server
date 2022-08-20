const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var array = []

app.get('/', (req, res) => {
  res.send(array[req.query.id])
})

app.post('/', jsonParser,(req, res) => {
  array.push(req.body.name)
  
  res.send(array)
}
)

app.put('/', jsonParser,(req, res) => {
 array[req.body.id]=req.body.name
 res.send(array)
}
)

app.delete('/', jsonParser,(req, res) => {
  array = array.filter((el)=> el !== req.body.name)
  res.send(array)
 }
 )



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})