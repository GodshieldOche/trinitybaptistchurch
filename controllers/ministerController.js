import Minister from '../models/Ministers'
import cloudinary from "cloudinary"
import asyncHandler from "express-async-handler";
import ErrorHandler from "../middleware/errorHandler"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Create Minister
// post => api/ministers
const addMinister = asyncHandler(async (req, res, next) => {
    const { name, about, role, imageUrl } = req.body

    
    const minister = await Minister.create({
        name,
        about,
        role,
        imageUrl
    })

    res.status(200).json({
        success: "true",
        message: "Added new minister"
    })

})

// Get all Ministers
// get => api/ministers
const getMinisters = asyncHandler(async (req, res, next) => {
    
    const ministers = await Minister.find().sort({ createdAt: -1 })

    res.status(200).json({
        success: "true",
        ministers
    }) 
}) 



// Delete Minister
// Delete => api/ministers/:id
const deleteMinister = asyncHandler(async (req, res, next) => {
   
    const minister = await Minister.findById(req.query.id)

    if (!minister) {
       return next(new ErrorHandler('Sermon not found with this ID', 404))
    } else {

        await cloudinary.v2.uploader.destroy(minister.imageUrl.public_id)

        await minister.remove()
        res.status(200).json({
            success: "true",
            message: "minister Deleted"
        })
    }
}) 


// get Minister
// get => api/ministers/:id
const getMinister = asyncHandler(async (req, res, next) => {

    const minister = await Minister.findById(req.query.id)

    if (!minister) {
       return next(new ErrorHandler('Sermon not found with this ID', 404))
    } else {

        res.status(200).json({
            success: "true",
            minister
        })
    }
}) 


// update Minister
// put => api/ministers/:id
const updateMinister = asyncHandler(async (req, res, next) => {
    
    const minister = await Minister.findById(req.query.id)

    if (!minister) {
       return next(new ErrorHandler('Sermon not found with this ID', 404))
    } else {
        const { name, about, role, imageUrl } = req.body

        minister.name = name
        minister.about = about
        minister.role = role

        if (minister.imageUrl.public_id !== imageUrl.public_id) {
            await cloudinary.v2.uploader.destroy(minister.imageUrl.public_id)
            minister.imageUrl = imageUrl
        }

        await minister.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }

}) 



export {
    addMinister,
    getMinisters,
    deleteMinister,
    getMinister,
    updateMinister
}