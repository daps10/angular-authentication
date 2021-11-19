
const mongoose = require("mongoose");

// Get an instance of mongoose schema.
const Schema = mongoose.Schema

const eventSchema = new Schema ({
    name : String,
    description : String,
    eventType: {
        type: String,
        enum : ['Regular','Special'],
        default: 'Regular'
    },
}, {
  
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'    
    }
})

module.exports = mongoose.model('events', eventSchema);