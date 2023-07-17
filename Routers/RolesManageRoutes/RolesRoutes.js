const router = require("express").Router();
const { AddAdminRoles, GetRoles } = require('../../Controllers/RolesAndPermission/RolesAndPermissionController')


// set the Admin Roles
router.post("/add", AddAdminRoles);
// get the roles 
router.get("/get/:role", GetRoles);






module.exports = router