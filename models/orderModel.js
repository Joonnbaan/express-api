const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
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
                                    "quantity": {
                                        type: Number,
                                        require: true
                                    },
                                    "price": {
                                        type: Number,
                                        require: true
                                    }
                                }
                            ]
                        }
                    ],
                    "productAddition": [
                        {
                            "selectQuantity": {
                                type: Number,
                                require: true
                            },
                            "selectEntries": [
                                {
                                    "productId": {
                                        type: String,
                                        require: true
                                    },
                                    "productName": {
                                        type: String,
                                        require: true
                                    },
                                    "quantity": {
                                        type: Number,
                                        require: true
                                    },
                                    "price": {
                                        type: Number,
                                        require: true
                                    },
                                }
                            ]
                        }
                    ]
                },
                "entryStatus": {
                    type: String,
                    require: true
                },
                "orderQuantity": {
                    type: Number,
                    require: true
                },
                "amount": {
                    type: Number,
                    require: true
                },
                "discount": {
                    type: Number,
                    require: true
                },
            }
        ],
        "orderStatus": {
            type: String,
            require: true
        },
        "orderSubTotalAmount": {
            type: Number,
            require: true
        },
        "orderDiscount": {
            type: Number,
            require: true
        },
        "orderTotalAmount": {
            type: Number,
            require: true
        },
    },
    {
        timestamps: true
    }
)

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;