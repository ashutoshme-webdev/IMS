//import the schema model
const Supplier = require("../models/Supplier");

//define route handler

exports.updateSupplier = async(req,res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;

        const supplier = await Supplier.findOneAndReplace(
            {_id:id},
            {name, updatedAt: Date.now()},
        )

        res.status(200).json({
            success:true,
            data:supplier,
            message: `Updated Successfully`,
           })
            
    }
    catch(err) {
        //error handling
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}

