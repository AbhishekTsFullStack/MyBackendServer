require('dotenv').config()
require("./connection")
const express = require("express")
const cors = require("cors")
const passport = require('passport')
const cookieSession = require('cookie-session')
const passportSetup = require("./passport");
const googleAuth = require('./Routers/GoogleAuth/GoogleAuth')
const CustomerRouter = require('./Routers/AuthRouters/customerRouter')
const ServiceRouter = require("./Routers/Services/ServicesRoutes")
const utilRouter = require("./Routers/utils")
const SupervisorRouter = require("./Routers/AuthRouters/SurvisorRouter")
const app = express()
// varibles


// middlewares
app.use(express.json())
app.use(
    cookieSession({
        name: "session",
        keys: ["helpers"],
        maxAge: 24 * 60 * 60 * 100, // 24 hours in milliseconds
    })
)
// initialize the passport
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Chal gaya bhai api ke saath bhi ")
})
app.use("/customer", CustomerRouter);
app.use("/service", ServiceRouter);
app.use("/supervisor", SupervisorRouter);
app.use("/util", utilRouter);
// app.use("/auth", googleAuth);


app.use(express.static('./static'))




// listen the port
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})
