const CustomerModel = require("../../Models/AuthModels/CustomerModel");
const CustomerID = require("../../Models/misc/customerId");
const OrderModel = require("../../Models/ordermodel/ordermodel");

const GetOrderNow = async (req, res) => {
    const formdata = req.body
    const { id } = req.params;
    // find user with id  
    const isUser = await CustomerModel.findById(id)
    if (!isUser) return res.status(404).json({ error: true, message: "Invalid user" })
    // new order
    const order = new OrderModel({
        ...formdata,
        customerId: isUser.customerId,
    })
    try {
        const isSubmit = await order.save()
        if (!isSubmit) return res.status(400).json({ error: true, message: "order not placed ! Try again" })

        isUser.bookings.push(isSubmit)
        isUser.save()

        res.status(200).json({ error: false, message: "successfully ordered", data: isSubmit })
    } catch (error) {
        res.status(500).json(error)
    }
}




export { GetOrderNow }