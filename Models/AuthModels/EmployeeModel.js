
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    departName: {
        type: String,
        default: "Office"
    },
    designationName: {
        type: String,
        enum: ["admin", "supervisor", "back office"],
        default: "admin"
    },
    refName: {
        type: String,
    },
    name: {
        type: String,
    },
    mobileNo: {
        type: Number,
    },
    email: {
        type: String,
    },
    aadharNo: {
        type: Number,
    },
    panNo: {
        type: String,
    },
    joinDate: {
        type: Date,
        default: Date.now()
    },
    password: {
        type: String,
    },
    img: {
        type: String,
    },
    address: {
        type: String,
    },
    aboutEmployee: {
        type: String,
    },
    documentOne1: {
        type: String,
    },
    documentOneImg: {
        type: String,
    },
    documentTwo: {
        type: String,
    },
    documentTwoImg: {
        type: String,
    },
    documentTwo: {
        type: String,
    },
    documentTwoImg: {
        type: String,
    }
})


const EmployeeModel = mongoose.model("Employee-list", schema)

module.exports = EmployeeModel;