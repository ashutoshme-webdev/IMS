const express  = require("express");
const router = express.Router();

//import controller
const {addProduct} = require("../controllers/addProduct");
const {getProducts, getProductById} = require("../controllers/getProducts");
const {updateProduct, patchProduct} = require("../controllers/updateProduct");
const {deleteProduct} =  require("../controllers/deleteProduct");

//define APi routes
router.post("/products", addProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.patch("/products/:id/adjust", patchProduct);


module.exports = router;