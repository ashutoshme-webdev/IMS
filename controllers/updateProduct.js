//import the schema model
const Product = require("../models/Product");

//define route handler

exports.updateProduct = async(req,res) => {
    try {
        const {id} = req.params;
        const {name, category,quantity} = req.body;
        //ensuring that product quantity is always greater than or equal to zero
        if (quantity < 0) {
            return res.status(400).send('Minimum quantity cannot be less than zero');
          }

        const product = await Product.findOneAndReplace(
            {_id:id},
            {name, category, quantity, updatedAt: Date.now()},
        )

        res.status(200).json({
            success:true,
            data:product,
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

exports.patchProduct = async(req,res) => {
    try {
        const {id} = req.params;
        const {name, category,quantity} = req.body;
        if (quantity < 0) {
            return res.status(400).send('Minimum quantity cannot be less than zero');
          }


        const product = await Product.findByIdAndUpdate(
            {_id:id},
            {quantity, updatedAt: Date.now()},
        )
       
        res.status(200).json({
            success:true,
            data:product,
            message: `Patched Successfully`,
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
