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
const RolesRoutes = require("./Routers/RolesManageRoutes/RolesRoutes")
const EmployeeRoutes = require("./Routers/AuthRouters/OfficeRouter")
const ServiceRoutes = require("./Routers/AuthRouters/ServiceProviderRoutes")
const ExpenseRouters = require('./Routers/ExpensesRouters/ExpenseRouters')
const SuperAdminRoutes = require("./Routers/AuthRouters/SuperAdminRoutes")
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
        origin: ["http://localhost:3000", "https://trackel-helper-frontend.vercel.app"],
        credentials: true,
    })
);
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Welcome to the Helper Services")
})
app.use("/customer", CustomerRouter);
app.use("/service", ServiceRouter);
app.use("/expense", ExpenseRouters);
app.use("/employee", EmployeeRoutes);
app.use("/service-provider", ServiceRoutes);
app.use("/roles", RolesRoutes);
app.use("/admin", SuperAdminRoutes);
app.use("/util", utilRouter);
// app.use("/auth", googleAuth);
app.use(express.static("./static"));






// listen the port
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})
