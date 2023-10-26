const VerifyModel = require("../Models/VerifyModel");

// Function to check if the provided input is an email
const isEmail = (input) => {
  // Email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(input);
};

// Function to check if the provided input is a mobile number
const isMobileNumber = (input) => {
  // Mobile number regex pattern
  const mobileRegex = /^\d{10}$/; // Assumes a 10-digit mobile number

  return mobileRegex.test(input);
};

const isOptValid = async (otp, otpid) => {
  try {
    const isValid = await VerifyModel.findOne({
      otp: otp,
      otpid: otpid,
      otpExpireTime: { $gt: Date.now() },
    });
    return isValid ? true : false; // You can simplify the return statement
  } catch (error) {
    console.error("Error in isOptValid:", error); // Log the error for debugging
    return false;
  }
};

module.exports = { isEmail, isMobileNumber, isOptValid };
