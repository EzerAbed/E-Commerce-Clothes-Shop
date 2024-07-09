const mongoose = require('mongoose')

//definition of the image schema
const imageSchema = mongoose.Schema({
    url : {
        type: String,
        required: true
    },

    primary : {
        type : Boolean,
        default : false
    } 
})

//definition of the product model
const productSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },

    price : {
        type: Number,
        required: true
    },

    discount : {
        type: Number,
        default: 0
    },

    images : [imageSchema],

    description : {
        type: String,
        required: true
    },

    category : {
        type: String,
        required: true
    },

    available_S_Size : {
        type: Number,
        required: true
    },

    available_M_Size : {
        type: Number,
        required: true
    },

    
    available_L_Size : {
        type: Number,
        required: true
    },

    available_XL_Size : {
        type: Number,
        required: true
    },

    stock : {
        type: Number,
        required: true
    },

    rating : {
        type: Number,
        default: 0.0
    },

    reviewsCount : {
        type: Number,
        default: 0
    },

    createdAt : {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product 