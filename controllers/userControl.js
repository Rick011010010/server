


var array = []

  exports.gett =  (req, res) => {   
  res.send(array[req.query.id])
 }



   exports.postt = (req, res) => {
    array.push(req.body.name)
    
    res.send(array)
  }
  
  
  
   exports.putt = (req, res) => {
    array[req.body.id]=req.body.name
    res.send(array)
   }
   
   
   
   exports.deletee = (req, res) => {
    array = array.filter((el)=> el !== req.body.name)
    res.send(array)
   }






const { text } = require("body-parser")
   // import Todo Model
const  Todo = require("../models/model");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllTodos = (req, res) => {
Todo.find({}, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};

// createNewTodo function - To create new todo
exports.createNewTodo = (req, res) => {
let  newTodo = new Todo (req.body);
newTodo.save((err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(todo);
});
};

// updateTodo function - To update todo status by id
exports.updateTodo = (req, res) => {
Todo.findOneAndUpdate({ text:req.params.text }, req.body, { new:true }, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};

// deleteTodo function - To delete todo by id
exports.deleteTodo = async ( req, res) => {
await  Todo.deleteOne({ text:req.params.text }).then(function(){
  res.send("Data deleted")
}).catch(function(error){
  res.send("Data  not deleted")

})
}
   


  


   


