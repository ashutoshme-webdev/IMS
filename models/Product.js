const mongoose = require("mongoose");
//defining model schema
const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50,
            unique:true,
        },
        category: {
            type:String,
            required:true,
            maxLength:50,
        },
        quantity: {
            type:Number,
            required:true,
            maxLength:50,
            min:[0, 'min quantity cannot be less than zero'],
            default:0,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Product", productSchema);