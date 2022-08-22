const express = require('express')
const control = express.Router()


var array = []

exports.get('/', (req, res) => {   
  res.send(array[req.query.id])
}
)





  exports.post = (req, res) => {
    array.push(req.body.name)
    
    res.send(array)
  }
  
  
  
   exports.put = (req, res) => {
    array[req.body.id]=req.body.name
    res.send(array)
   }
   
   
   
   exports.Delete = (req, res) => {
    array = array.filter((el)=> el !== req.body.name)
    res.send(array)
   }


   export default userControl
   


  


   


