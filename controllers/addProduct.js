//import the schema model
const Product = require("../models/Product");

//define route handler

exports.addProduct = async(req,res) => {
    try {
            const {name,category,quantity} = req.body;
            const response = await Product.create({name,category,quantity});
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
