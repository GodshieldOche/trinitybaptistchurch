import Register from '../models/Register'
import Conference from '../models/Conference'
import asyncHandler from "express-async-handler";
import ErrorHandler from "../middleware/errorHandler"



// post Register
// post =>  /api/admin/Register
const postRegister = asyncHandler(async (req, res, next) => {

    const register = await Register.create(req.body)

    res.status(200).json({
        success: "true",
        message: "Register created successfully",
    })

})



// create Registers
// get =>  /api/admin/Registers
const getAdminRegisters = asyncHandler(async (req, res, next) => {

    const registers = await Register.find({}).sort('-date').populate({
        path: 'conference',
        select: "title",
        model: Conference
    })

    res.status(200).json({
        success: "true",
        registers,
    })

})


// Delete register
// Delete => api/admin/register/:id
const deleteRegister = asyncHandler(async (req, res, next) => {

    const register = await Register.findById(req.query.id)

    if (!register) {
        return next(new ErrorHandler('Register not found with this ID', 404))
    } else {

        await register.remove()

        res.status(200).json({
            success: "true",
            message: "Register Deleted"
        })
    }
})


export {
    postRegister,
    getAdminRegisters,
    deleteRegister
}