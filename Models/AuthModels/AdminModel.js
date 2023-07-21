const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    name: String,
    email: String,
    mobileNo: Number,
    password: String,
}, {
    timestamps: true
})


const AdminModel = mongoose.model("Admin", schema);

module.exports = AdminModel;