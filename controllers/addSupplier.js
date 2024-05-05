//import the schema model
const Supplier = require("../models/Supplier");

//define route handler

exports.addSupplier = async(req,res) => {
    try {
            const {name} = req.body;
            const response = await Supplier.create({name});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
