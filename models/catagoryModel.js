const mongoose = require('mongoose')

const catagorySchema = mongoose.Schema(

    {
        "catagoryId": {
            type: String,
            required: true
        },
        "descriptionName": {
            type: String,
            required: true
        },
        "image": {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }

)

const Catagory = mongoose.model('Catagory', catagorySchema);

module.exports = Catagory;