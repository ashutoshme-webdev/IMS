//import the schema model
const Category = require("../models/Category");

//define route handler

exports.deleteCategory = async(req,res) => {
    try {
        const {id} = req.params;

        await Category.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Category DELETED",
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
