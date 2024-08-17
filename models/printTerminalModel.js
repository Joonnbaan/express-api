const mongoose = require('mongoose')

const printTerminalSchema = mongoose.Schema(

    {
        "shopId": {
            type: String,
            required: true
        },
        "terminalId": {
            type: String,
            required: true
        },
        "terminalIp": {
            type: String,
            required: true
        },
        "printCatagory": {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true
    }

)

const PrintTerminal = mongoose.model('PrintTerminal', printTerminalSchema);

module.exports = PrintTerminal;