const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());



app.use(jsonParser)

const userRouter = require('./routes/users')

app.use('/  ', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// Export mongoose
const  mongoose = require("mongoose");

//Assign MongoDB connection string to Uri and declare options settings
var  uri = "mongodb+srv://ossama:oussama.siham123@cluster0.okrrfov.mongodb.net/?retryWrites=true&w=majority"

// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});









