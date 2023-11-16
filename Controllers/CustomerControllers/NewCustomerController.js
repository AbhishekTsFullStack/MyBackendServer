const NewCustomer = require('./../../Models/CustomerModels/NewCustomerModal');

// Create a new customer
const createNewCustomer = async (req, res) => {
    try {
        const customer = NewCustomer(req.body);
        await customer.save();
        res.status(201).json({ success: true, message: 'Customer created successfully', data: customer });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get all customers
const getAllNewCustomers = async (req, res) => {
    try {
        const customers = await NewCustomer.find();
        res.status(200).json({ success: true, data: customers });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a specific customer by ID
const getNewCustomerById = async (req, res) => {
    try {
        const customer = await NewCustomer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ success: false, error: 'Customer not found' });
        }
        res.status(200).json({ success: true, data: customer });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a customer by ID
const updateNewCustomerById = async (req, res) => {
    try {
        const customer = await NewCustomer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!customer) {
            return res.status(404).json({ success: false, error: 'Customer not found' });
        }
        res.status(200).json({ success: true, message: 'Customer updated successfully', data: customer });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete a customer by ID
const deleteNewCustomerById = async (req, res) => {
    try {
        const customer = await NewCustomer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ success: false, error: 'Customer not found' });
        }
        res.status(204).json({ success: true, message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    createNewCustomer,
    getAllNewCustomers,
    getNewCustomerById,
    updateNewCustomerById,
    deleteNewCustomerById,
};
