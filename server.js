const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const Catagory = require('./models/catagoryModel');
const PrintLog = require('./models/printLogModel');
const PrintTerminal = require('./models/printTerminalModel');
const Order = require('./models/orderModel');
const app = express();

// middle ware input json 
app.use(express.json());
// middle ware input json form
app.use(express.urlencoded({ extended: false }));

// Product
// Fresh API - Get all products

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Fresh API - Get single products
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// update 
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: 'Cannot find any product by Id ${id}' });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Delete 
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Cannot delete any product by Id ${id}' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// async <=> await When used await will be used async on
// Create API - Create single record
app.post('/product', async (req, res) => {
    // test server response
    // console.log(req.body);
    // res.send(req.body);
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Catagory
// Fresh API - Get all catagorys

app.get('/catagorys', async (req, res) => {
    try {
        const catagorys = await Catagory.find({});
        res.status(200).json(catagorys);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Fresh API - Get single catagory
app.get('/catagory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const catagory = await Catagory.findById(id);
        res.status(200).json(catagory);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// update catagory
app.put('/catagory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const catagory = await Catagory.findByIdAndUpdate(id, req.body);
        if (!catagory) {
            return res.status(404).json({ message: 'Cannot find any product by Id ${id}' });
        }
        const updatedCatagory = await Catagory.findById(id);
        res.status(200).json(updatedCatagory);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Delete catagory
app.delete('/catagory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const catagory = await Catagory.findByIdAndDelete(id);
        if (!catagory) {
            return res.status(404).json({ message: 'Cannot delete any Catagory by Id ${id}' });
        }
        res.status(200).json(catagory);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
// async <=> await When used await will be used async on
// Create catagory API - Create single record
app.post('/catagory', async (req, res) => {
    // test server response
    // console.log(req.body);
    // res.send(req.body);
    try {
        const catagory = await Catagory.create(req.body);
        res.status(200).json(catagory);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// printTerminal

// Fresh API - Get all printer terminal
app.get('/printTerminals', async (req, res) => {
    try {
        const printTerminals = await PrintLog.find({});
        res.status(200).json(printTerminals);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Fresh API - Get single printer terminal
app.get('/printTerminal/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const printTerminal = await PrintTerminal.findById(id);
        res.status(200).json(printTerminal);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// update printer terminal
app.put('/printTerminal/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const printTerminal = await PrintTerminal.findByIdAndUpdate(id, req.body);
        if (!printTerminal) {
            return res.status(404).json({ message: 'Cannot find any Printer Terminal by Id ${id}' });
        }
        const updatedPrintTerminal = await PrintTerminal.findById(id);
        res.status(200).json(updatedPrintTerminal);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Delete printer terminal
app.delete('/printTerminal/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const printTerminal = await PrintTerminal.findByIdAndDelete(id);
        if (!printTerminal) {
            return res.status(404).json({ message: 'Cannot delete any Printer Terminal by Id ${id}' });
        }
        res.status(200).json(printTerminal);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
// async <=> await When used await will be used async on
// Create printer terminal API - Create single record
app.post('/printTerminal', async (req, res) => {
    // test server response
    // console.log(req.body);
    // res.send(req.body);
    try {
        const printTerminal = await PrintTerminal.create(req.body);
        res.status(200).json(printTerminal);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// printLog

// Fresh API - Get all print log
app.get('/printLogs', async (req, res) => {
    try {
        const printLogs = await PrintLog.find({});
        res.status(200).json(printLogs);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Fresh API - Get single catagory
app.get('/printLog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const printLog = await PrintLog.findById(id);
        res.status(200).json(printLog);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// update 
app.put('/printLog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const printLog = await PrintLog.findByIdAndUpdate(id, req.body);
        if (!printLog) {
            return res.status(404).json({ message: 'Cannot find any Print Log by Id ${id}' });
        }
        const updatedPrintLog = await PrintLog.findById(id);
        res.status(200).json(updatedPrintLog);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Delete 
app.delete('/printLog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const printLog = await PrintLog.findByIdAndDelete(id);
        if (!printLog) {
            return res.status(404).json({ message: 'Cannot delete any Print Log by Id ${id}' });
        }
        res.status(200).json(printLog);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
// async <=> await When used await will be used async on
// Create API - Create single record
app.post('/printLog', async (req, res) => {
    // test server response
    // console.log(req.body);
    // res.send(req.body);
    try {
        const printLog = await PrintLog.create(req.body);
        res.status(200).json(printLog);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Order

// Fresh API - Get all order
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Fresh API - Get single order
app.get('/order/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// update order
app.put('/order/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndUpdate(id, req.body);
        if (!order) {
            return res.status(404).json({ message: 'Cannot find any order by Id ${id}' });
        }
        const updatedOrder = await Order.findById(id);
        res.status(200).json(updatedOrder);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

// Delete 
app.delete('/order/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: 'Cannot delete any order by Id ${id}' });
        }
        res.status(200).json(printLog);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
// async <=> await When used await will be used async on
// Create API - Create single record
app.post('/order', async (req, res) => {
    // test server response
    // console.log(req.body);
    // res.send(req.body);
    try {
        const order = await Order.create(req.body);
        res.status(200).json(order);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})


mongoose.connect('mongodb+srv://joonnbaan:lodappon@cluster0.grrgs5a.mongodb.net/')
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(3000, () => {
            console.log('Node API app is running on port 3000');
        });

    }).catch((error) => {
        console.log(error)
    })