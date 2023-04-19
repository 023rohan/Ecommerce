const express = require("express")
const app = express()
const PORT =  5000
const registerrouter  = require("./routes/login")
const mongoose = require("mongoose")
const cors  = require('cors')
const User = require('./models/user')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/Shop")
.then(()=>{
    console.log("database connected")
})

app.get('/',(req,res)=>{
    res.send("API IS running")
})

app.use('/api',cors(),registerrouter)



app.use('/api/items', require("./routes/items"))

app.listen(PORT, console.log("Server is running on port ", PORT))