//import the schema model
const Category = require("../models/Category");

//define route handler

exports.addCategory = async(req,res) => {
    try {
            const {name} = req.body;
            const response = await Category.create({name});
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
