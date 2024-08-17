const mongoose = require('mongoose')

const productSchema = mongoose.Schema(

    {
        "productId": {
            type: String,
            required: true
        },
        "productName": {
            type: String,
            required: [true, "Please enter a product name"]
        },
        "productPrice": {
            type: Number,
            require: true,
            default: 0
        },
        "option": [
            { type: String }
        ],
        "isAddition": {
            type: Boolean,
            require: true
        },
        "isSellable": {
            type: Boolean,
            require: true
        },
        "isBundle": {
            type: Boolean,
            require: true
        },
        "bundleDescription": {
            "productSelect": [
                {
                    "catagory": {
                        type: String
                    },
                    "subCatagory": {
                        type: String
                    },
                    "selectQuantity": {
                        type: Number
                    }
                }
            ],
            "productAddition": [
                {
                    "catagory": {
                        type: String
                    },
                    "subCatagory": {
                        type: String
                    }
                }
            ]
        },
        "descriptionName": {
            type: String,
            required: true
        },
        "catagory": {
            type: String,
            required: true
        },
        "subCatagory": {
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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;