const express  = require("express");
const router = express.Router();

//import controller
const {addSupplier} = require("../controllers/addSupplier");
const {getSuppliers, getSupplierById} = require("../controllers/getSuppliers");
const {updateSupplier} = require("../controllers/updateSupplier");
const {deleteSupplier} =  require("../controllers/deleteSupplier");

//define APi routes
router.post("/suppliers", addSupplier);
router.get("/suppliers", getSuppliers);
router.get("/suppliers/:id", getSupplierById);
router.put("/suppliers/:id", updateSupplier);
router.delete("/suppliers/:id", deleteSupplier);


module.exports = router;