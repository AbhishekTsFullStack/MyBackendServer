const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    username: String,
    name: String,
    image: String,
    mobileNo: Number,
    aadharNo: Number,
    panNo: Number,
    email: String,
    dateofjoining: Date,
    password: String,
    parmanentAddress: String,
    currentAddress: String,
    referenceName: String,
    referenceAddress: String,
    referenceAadharNo: Number,
    referenceMobileNo: Number,
    referenceCity: String,
    referenceArea: String,
    referenceLocationArea: String,
    services: Array,
    documentOne: String,
    documentOneImg: String,
    documentTwo: String,
    documentTwoImg: String,
    documentThree: String,
    documentThreeImg: String,
    serviceProviderType: String,
    about: String
})

const SupervisorModel = mongoose.model("service-provider", schema)

module.exports = SupervisorModel;