//import the schema model
const Supplier = require("../models/Supplier");

//define route handler

exports.getSuppliers = async(req,res) => {
    try {
            //fetch all suppliers from database
            const suppliers = await Supplier.find({});

            //response
            res.status(200)
            .json({
                success:true,
                data:suppliers,
                message:"Entire Supplier Data is fetched",
            });
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


exports.getSupplierById = async(req, res) => {
    try {
       //extract suppliers on basis of id
       const id = req.params.id;
       const supplier = await Supplier.findById( {_id: id})

       //data for given id not found
       if(!supplier) {
        return res.status(404).json({
            success:false,
            message:"No Data Found with given Id",
        })
       }
       //data for given id FOUND
       res.status(200).json({
        success:true,
        data:supplier,
        message: `Supplier ${id} data successfully fetched`,
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
