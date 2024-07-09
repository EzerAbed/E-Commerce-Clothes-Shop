const Joi = require('joi')

// Define the validation schema for the images
const imageValidation = Joi.object({
  url: Joi.string()
    .required(),

  primary: Joi.boolean()
    .default(false),
})

// Define the validation of the products 

const productValidation = Joi.object({
    name: Joi.string()
    .required(),

    price: Joi.number()
    .required(),

    discount: Joi.number()
    .min(0)
    .max(100)
    .default(0),

    images: Joi.array()
    .items(imageValidation)
    .required(),

    description: Joi.string()
    .required(),

    category: Joi.string()
    .required(),

    available_S_Size: Joi.number()
    .required(),

    available_M_Size : Joi.number()
    .required(),

    available_L_Size : Joi.number()
    .required(),

    available_XL_Size : Joi.number()
    .required(),

    stock: Joi.number()
    .required(),

    rating: Joi.number()
    .min(0)
    .max(5)
    .default(0),

    reviewsCount: Joi.number()
    .min(0)
    .default(0),

    createdAt: Joi.date()
    .default(Date.now),

})

module.exports = productValidation