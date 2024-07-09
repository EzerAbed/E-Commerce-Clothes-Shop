//importing the necessary modules
const express = require('express')
const morgan = require("morgan")
const mongoose = require('mongoose')
const cors = require('cors')

//importing the routes
const userRoute = require('./Routes/User')
const productRoute = require('./Routes/Products')

//lanching the app
const app = express()

//Middelware 
app.use(express.json())
app.use(morgan("dev"))
app.use(cors("*"))

//route definition
app.use('/user', userRoute)
app.use('/products', productRoute)

//Database connection
connectDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://test:test@cluster0.otjixia.mongodb.net/E_Commerce", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        console.log("db connected")
      } catch (error) {
        console.log("Failled connection" + error.message)
      }
}

app.listen(8000, () => {
    connectDB()
    console.log("listening on port 8000 !");
});