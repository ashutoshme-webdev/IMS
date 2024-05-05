//import the schema model
const Supplier = require("../models/Supplier");

//define route handler

exports.deleteSupplier = async(req,res) => {
    try {
        const {id} = req.params;

        await Supplier.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Supplier DELETED",
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
