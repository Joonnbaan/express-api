const mongoose = require('mongoose');

const printLogSchema = mongoose.Schema(

    {
        "cartId": {
            type: String,
            require: true
        },
        "orderId": {
            type: String,
            require: true
        },
        "customerId": {
            type: String,
            require: true
        },
        "customerName": {
            type: String,
            require: true
        },
        "shopId": {
            type: String,
            require: true
        },
        "terminalId": {
            type: String,
            require: true
        },
        "terminalIp": {
            type: String
        },
        "orderEntry": [
            {
                "entryNumber": {
                    type: Number,
                    require: true
                },
                "productId": {
                    type: String,
                    require: true
                },
                "productName": {
                    type: String,
                    require: true
                },
                "bundleDescription": {
                    "productSelect": [
                        {
                            "selectEntries": [
                                {
                                    "selectQuantity": {
                                        type: Number
                                    },
                                    "productId": {
                                        type: String
                                    },
                                    "productName": {
                                        type: String
                                    },
                                    "quantity": {
                                        type: Number
                                    },
                                    "price": {
                                        type: Number
                                    }
                                }
                            ]
                        },
                        {
                            "selectQuantity": {
                                type: Number
                            },
                            "selectEntries": [
                                {
                                    "productId": {
                                        type: String
                                    },
                                    "productName": {
                                        type: String
                                    },
                                    "quantity": {
                                        type: Number
                                    },
                                    "price": {
                                        type: Number
                                    }
                                }
                            ]
                        }
                    ],
                    "productAddition": [
                        {
                            "selectQuantity": {
                                type: Number
                            },
                            "selectEntries": [
                                {
                                    "productId": {
                                        type: String
                                    },
                                    "productName": {
                                        type: String
                                    },
                                    "quantity": {
                                        type: Number
                                    },
                                    "price": {
                                        type: Number
                                    }
                                }
                            ]
                        }
                    ]
                },
                "entryStatus": {
                    type: String,
                    required: ["Ordering", "Ordered", "Printed", "Processing", "Delivered"]
                },
                "orderQuantity": {
                    type: Number
                },
                "amount": {
                    type: Number
                },
                "discount": {
                    type: Number
                }
            }
        ]
    },
    {
        timestamps: true
    }

)

const PrintLog = mongoose.model('PrintLog', printLogSchema);

module.exports = PrintLog;