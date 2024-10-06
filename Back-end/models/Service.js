const mongoose = require("mongoose");

const {Schema} = mongoose;


const serviceSchema = new Schema({
    chinabox:{
        type:Number,
        required:true,
    },
    moto99:{
        type:Number,
        required:true,
    },
    ifood:{
        type: Number,
        required:true,
    },
    lalamove:{
        type:Number,
        required:true,
    },
    data:{
        type:String,
        required:true
    },
    gastos:{
       type:Number,
       required:true
    },
    lucros:{
        type:Number,
        required:true
     },
},
{ timestamps: true }
);

const Service = mongoose.model("Service",serviceSchema);

module.exports = {
    Service,
    serviceSchema,

};