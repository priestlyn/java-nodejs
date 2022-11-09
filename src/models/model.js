const mongoose = require('mongoose')
const { stringify } = require('querystring')
const schema=mongoose.schema

const todoschema = new schema({
    firstname:{
        type:string,
        required:true
    },
    lastname:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true
    }
})
const todo = mongoose.model("model", todoschema)
module.exports = todo;