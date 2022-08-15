const {
    Schema,
    model
} = require('mongoose')
const AdminsSchema = new Schema({
    adminposition: {
        type: String,
        required: true
    } ,
    adminName: {
        type: String,
        required: true
    },
    adminImg: {
        type: String,
        required: true
    },
    adminAbout: {
        type: String,
        required: true
    },
    adminPhone: {
        type: Number,
        required: true
    }
})

module.exports = model('admin', AdminsSchema)