

const mongoose = require('mongoose')
const schemas = mongoose.Schema

const todoschema = new schemas({
activity:{
    type:String,
    required:true
},
// completed:{
//     type:bool,
//     required:true,
//     default:false
// }


})
  
const todo = mongoose.model("todoschema", todoschema)
module.exports= todo;
