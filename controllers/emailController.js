import Email from '../models/Email'
import asyncHandler from "express-async-handler";
import ErrorHandler from "../middleware/errorHandler"



// post email
// post =>  /api/admin/email
const postEmail = asyncHandler(async (req, res, next) => {

    const email = await Email.create(req.body)

    res.status(200).json({
        success: "true",
        message: "email created successfully",
    })

})



// create Email
// get =>  /api/admin/Email
const getAdminEmails = asyncHandler(async (req, res, next) => {

    const emails = await Email.find({})

    res.status(200).json({
        success: "true",
        emails,
    })

})


// Delete email
// Delete => api/admin/email/:id
const deleteEmail = asyncHandler(async (req, res, next) => {

    const email = await Email.findById(req.query.id)

    if (!email) {
        return next(new ErrorHandler('email not found with this ID', 404))
    } else {

        await email.remove()

        res.status(200).json({
            success: "true",
            message: "Email Deleted"
        })
    }
})



export {
    postEmail,
    getAdminEmails,
    deleteEmail
}