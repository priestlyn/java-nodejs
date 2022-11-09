const mongoose =require('mongoose')
//mongoose helps us to connect node js to mongo db
const express = require('express')
//Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.

const app =express()

const routers = require("./router/router")

const port = 8080;

//
const link = "mongodb+srv://priestlyn:aZuvjXPQg1YH0gwj@codequeen7.mfkquau.mongodb.net/?retryWrites=true&w=majority";
// app.get('/', (req, res) =>{
//     res.status(200).send({
//         "message": "welcome to server"
//     })
// })
app.use('/api', routers)

mongoose.connect(link, ()=>{
app.listen (port,()=>{
    console.log(`server is now running ${port}`)
})
}).catch(error=>console.log(error))