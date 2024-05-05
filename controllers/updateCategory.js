//import the schema model
const Category = require("../models/Category");

//define route handler

exports.updateCategory = async(req,res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;

        const category = await Category.findOneAndReplace(
            {_id:id},
            {name, updatedAt: Date.now()},
        )

        res.status(200).json({
            success:true,
            data:category,
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

exports.patchCategory = async(req,res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;

        const product = await Category.findByIdAndUpdate(
            {_id:id},
            {name, updatedAt: Date.now()},
        )

        res.status(200).json({
            success:true,
            data:category,
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

