//import the schema model
const Product = require("../models/Product");

//define route handler

exports.getProducts = async(req,res) => {
    try {
            //fetch all products from database
            const products = await Product.find({});

            //response
            res.status(200)
            .json({
                success:true,
                data:products,
                message:"Entire Product Data is fetched",
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


exports.getProductById = async(req, res) => {
    try {
       //extract product items basis on id
       const id = req.params.id;
       const product = await Product.findById( {_id: id})

       //data for given id not found
       if(!product) {
        return res.status(404).json({
            success:false,
            message:"No Data Found with given Id",
        })
       }
       //data for given id FOUND
       res.status(200).json({
        success:true,
        data:product,
        message: `Product ${id} data successfully fetched`,
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
