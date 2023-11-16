const mongoose = require('mongoose');

const NewCustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  age: {
    type: Number,
    min: 0,
  },
  memberId: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  landmark: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
  },
  location: {
    type: String,
    trim: true,
  },
  mobileNo: {
    type: String,
    required: true,
    trim: true,
    match: [/^[0-9]{10}$/, 'Invalid mobile number'],
  },
  telNo: {
    type: String,
    trim: true,
    match: [/^[0-9]{0,15}$/, 'Invalid telephone number'],
  },
  officeNo: {
    type: String,
    trim: true,
  },
  alternateNo: {
    type: String,
    trim: true,
  },
  aadharNo: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: [/^[0-9]{12}$/, 'Invalid Aadhar number'],
  },
  occupation: {
    type: String,
    trim: true,
  },
  designation: {
    type: String,
    trim: true,
  },
  houseType: {
    type: String,
    enum: ['Own', 'Rented'],
  },
  image: {
    type: String,
    validate: {
      validator: (value) => /\.(jpg|jpeg|png)$/.test(value),
      message: 'Invalid image file format',
    },
  },
  spouseNames: {
    type: [String],
    validate: {
      validator: (value) => value.length <= 3,
      message: 'Up to 3 spouse names are allowed',
    },
  },
  dob: {
    type: Date,
  },
  payment: {
    type: String,
    trim: true,
  },
  discountAmount: {
    type: Number,
    min: 0,
  },
  receivedAmount: {
    type: Number,
    min: 0,
  },
  balanceAmount: {
    type: Number,
    min: 0,
  },
  paymentMethod: {
    type: String,
    trim: true,
  },
  freeServices: {
    type: [String],
    validate: {
      validator: (value) => value.length <= 2,
      message: 'Up to 2 free services are allowed',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

NewCustomerSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const NewCustomer = mongoose.model('NewCustomer', NewCustomerSchema);

module.exports = NewCustomer;
