const { GetOrderNow } = require("../../Controllers/ordercontroller/ordercontrollers");

const router = require("express").Router();

// book order

router.post('/order/:id', GetOrderNow)



module.exports = router;