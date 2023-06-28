const experess = require("express")
require("./connection")
require('dotenv').config()
const app = experess()







const port = process.env.PORT || 8080



app.listen(port, () => {
    console.log(`server started at port ${port}`)
})