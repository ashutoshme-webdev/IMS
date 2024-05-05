const express  = require("express");
const router = express.Router();

//import controller
const {addCategory} = require("../controllers/addCategory");
const {getCategories, getCategoryById} = require("../controllers/getCategories");
const {updateCategory, patchCategory} = require("../controllers/updateCategory");
const {deleteCategory} =  require("../controllers/deleteCategory");

//define APi routes
router.post("/categories", addCategory);
router.get("/categories", getCategories);
router.get("/categories/:id", getCategoryById);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);
router.patch("/categories/:id", patchCategory);


module.exports = router;