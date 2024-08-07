const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();

// middle ware input json 
app.use(express.json());
// middle ware input json form
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
    res.send('Hello node API')
})

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

// Fresh API - Get all products
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


mongoose.connect('mongodb+srv://joonnbaan:lodappon@cluster0.grrgs5a.mongodb.net/')
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(3000, () => {
            console.log('Node API app is running on port 3000');
        });

    }).catch((error) => {
        console.log(error)
    })