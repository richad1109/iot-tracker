const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({

    deviceId:{
        type:String,
        required:true
    },

    nama:{
        type:String,
        required:true
    },

    status:{
        type:String,
        default:"Offline"
    },

    latitude:{
        type:Number,
        default:0
    },

    longitude:{
        type:Number,
        default:0
    },

    lastUpdate:{
        type:Date,
        default:null
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports =
mongoose.model("Device", deviceSchema);