const mongoose = require("mongoose")

const {Schema} = mongoose

const { serviceSchema} = require("./Services")

const motoboySchema = new Schema({
    ganhos:{
        type:Number,
        required: true,
    },
    gastos:{
        type:Number,
        required:true,
    },
    gasolina:{
        type:Number,
        required:true,
    },
    lucro:{
        type:Number,
        required:true,
    },
    services:{
        type:[serviceSchema],
    },
},
{ timestamps: true }
);

const motoboy = mongoose.model("motoboy",motoboySchema);

mondule.exports = motoboy;