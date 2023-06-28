const experess = require("express")
require("./connection")
require('dotenv').config()
const CustomerRouter = require("./Routers/AuthRouters/customerRouter")
const app = experess()


app.use(experess.json())


app.use("/customer", CustomerRouter);
app.use("/", (req, res) => {
    res.send("Bhai bcrypt bhi chal raha hai ")
})




const port = process.env.PORT || 8080



app.listen(port, () => {
    console.log(`server started at port ${port}`)
})