const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hostelNo: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roomNo: {
    type: Number,
    required: true
  },
  address: {   
    type: String,
    required: true
  },
  prn: {
    type: Number,
    required: true,
    unique: true
  },
  gaurdianNo: {
    type: String,
    required: true
  },
    phNo: {
    type: Number,
    required: true
  }
}, { timestamps: true }); 
const hostelModel = mongoose.model("HostelModel", userSchema); 
module.exports = hostelModel;
