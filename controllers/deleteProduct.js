//import the schema model
const Product = require("../models/Product");

//define route handler

exports.deleteProduct = async(req,res) => {
    try {
        const {id} = req.params;

        await Product.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Product DELETED",
        })
       
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}
