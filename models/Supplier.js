const mongoose = require("mongoose");

//defining model schema
const supplierSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50,
            unique:true,
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

module.exports = mongoose.model("Supplier", supplierSchema);