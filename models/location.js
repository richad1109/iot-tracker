const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({

    deviceId:{
        type:String,
        required:true
    },

    latitude:Number,

    longitude:Number,

    timestamp:{
        type:Date,
        default:Date.now
    }

});

module.exports =
mongoose.model("Location", locationSchema);