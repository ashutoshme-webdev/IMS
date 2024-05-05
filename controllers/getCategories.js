//import the schema model
const Category = require("../models/Category");

//define route handler

exports.getCategories = async(req,res) => {
    try {
            //fetch all categories from database
            const categories = await Category.find({});

            //response
            res.status(200)
            .json({
                success:true,
                data:categories,
                message:"Entire Category Data is fetched",
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


exports.getCategoryById = async(req, res) => {
    try {
       //extract category on basis of id
       const id = req.params.id;
       const category = await Category.findById( {_id: id})

       //data for given id not found
       if(!category) {
        return res.status(404).json({
            success:false,
            message:"No Data Found with given Id",
        })
       }
       //data for given id FOUND
       res.status(200).json({
        success:true,
        data:category,
        message: `Category ${id} data successfully fetched`,
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
