const express = require('express')
const todoschema = require('../models/todoschema')
const router = express.Router();

router.post("/todos", async(req,res) => {
    console.log("hello")
})

module.exports = router;