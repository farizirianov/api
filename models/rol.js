const mongoose = require('mongoose')

const rolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Rol', rolSchema)