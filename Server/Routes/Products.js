const router = require("express").Router()

//importing the controllers
const { getAllProducts,
        getBestRatedProduct,
        getNewestProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct, } = require('../Controllers/Products')

//GET Requists
router.get("/", getAllProducts)
router.get("/bestRatedProducts", getBestRatedProduct)
router.get("/newestProducts", getNewestProducts)
router.get("/:id", getProductById)

//POST Requists
router.post("/createProduct", createProduct)

//PUT Requists
router.put("/updateProduct", updateProduct)

//DELETE Requists

router.delete("/delete/:id", deleteProduct)

module.exports = router
