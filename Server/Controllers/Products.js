const productSchema = require('../Models/Products')
const productValidation = require('../Validation/Products')

//Get all products
 const getAllProducts = async (req, res) => {
    try {
        const products = await productSchema.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Get the best raited products
 const getBestRatedProduct = async (req, res) => {
    try {
        const product = await productSchema.find().sort({ rating: -1 })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Get the newest products
 const getNewestProducts = async (req, res) => {
    try {
        const products = await productSchema.find().sort({ createdAt: -1 }).limit(5)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Get a single product by id
 const getProductById = async (req, res) => {
    try {
        const product = await productSchema.findById(req.params.id)
        if (!product) return res.status(404).json({ message: 'Product not found' })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Create a new product
const createProduct = async (req, res) => {
    const {error, value} = productValidation.validate(req.body)
    if (error) return res.status(400).json({ message: error.details[0].message })
    
    try{
        const newProduct = await productSchema.create(value)
        res.status(201).json(newProduct)
    }catch(e){
        res.status(500).json({ message: e.message })
    }
}

//Update a product by id
 const updateProduct = async (req, res) => {
    const {error, value} = productValidation.validate(req.body)
    if (error) return res.status(400).json({ message: error.details[0].message })
    
    try{
        const updatedProduct = await productSchema.findByIdAndUpdate(req.params.id, value, {new: true})
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' })
        res.status(200).json(updatedProduct)
    }catch(e){
        res.status(500).json({ message: e.message })
    }
}

//Delete a product by id
 const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productSchema.findByIdAndDelete(req.params.id)
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' })
        res.status(200).json(deletedProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllProducts,
    getBestRatedProduct,
    getNewestProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}