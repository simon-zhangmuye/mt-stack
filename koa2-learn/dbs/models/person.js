const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({name: String, age: Number})

module.exports = mongoose.model('Person', personSchema)
