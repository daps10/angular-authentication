
const mongoose = require("mongoose");

// Get an instance of mongoose schema.
const Schema = mongoose.Schema

const userSchema = new Schema ({
    email : String,
    password : String
}, {
  
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'    
    }
})

module.exports = mongoose.model('users', userSchema);