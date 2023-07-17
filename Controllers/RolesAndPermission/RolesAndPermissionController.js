const AdminRolesModel = require("../../Models/RolesAndPermission/AdminModel");
const BackofficeRoleModel = require("../../Models/RolesAndPermission/BackOfficeModel");
const ServiceProviderRolesModel = require("../../Models/RolesAndPermission/ServiceProviderModel");
const SuperAdminRolesModel = require("../../Models/RolesAndPermission/SuperAdminModel");
const SuperVisorRolesModel = require("../../Models/RolesAndPermission/SupervisorModel");
const { roles } = require("../../config");

// add the admin roles 


const AddAdminRoles = async (req, res) => {
    const Allroles = req.body;

    try {
        const result = await new ServiceProviderRolesModel(req.body).save()
        if (!result) return res.status(400).json({ error: true, message: "Roles not Added" })
        res.status(200).json({ error: false, data: result })
    } catch (error) {
        res.status(500).json({ error })
    }
}



// get the roles  
const GetRoles = async (req, res) => {
    const reqRole = req.params.role
    try {
        let result;
        if (reqRole === roles.super) {
            result = await SuperAdminRolesModel.find({})
        }
        else if (reqRole === roles.admin) {
            result = await AdminRolesModel.find({})
        } else if (reqRole === roles.office) {
            result = await BackofficeRoleModel.find({})
        } else if (reqRole === roles.service) {
            result = await ServiceProviderRolesModel.find({})
        } else if (reqRole === roles.supervisor) {
            result = await SuperVisorRolesModel.find({})
        } else {
            result = result
        }

        if (!result) return res.status(404).json({ error: true, message: "Not Found data" })
        res.status(200).json({ error: false, data: result })
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = { AddAdminRoles, GetRoles }